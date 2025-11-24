import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { localCategories, localProducts } from '../utils/localData';

const CategoriesContext = createContext();

// Initial state includes the full categories data
const initialState = {
  categories: [],
  subcategories: [],
  loading: true,
  error: null,
  success: null
};

// Action types
const actionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_SUCCESS: 'SET_SUCCESS',
  SET_CATEGORIES: 'SET_CATEGORIES',
  ADD_PRODUCT_TO_CATEGORY: 'ADD_PRODUCT_TO_CATEGORY',
  REMOVE_PRODUCT_FROM_CATEGORY: 'REMOVE_PRODUCT_FROM_CATEGORY',
  UPDATE_PRODUCT_IN_CATEGORY: 'UPDATE_PRODUCT_IN_CATEGORY',
  CLEAR_MESSAGES: 'CLEAR_MESSAGES'
};

// Reducer function
const categoriesReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        success: null
      };

    case actionTypes.SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: null
      };

    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    case actionTypes.ADD_PRODUCT_TO_CATEGORY:
      const { categoryId, product } = action.payload;
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === categoryId) {
            // If category has subCategories, we need to handle that
            if (category.subCategories) {
              // For now, add to first subcategory as a default
              // In a real implementation, you might want to specify which subcategory to add to
              return {
                ...category,
                subCategories: category.subCategories.map((sub, index) =>
                  index === 0
                    ? { ...sub, products: [...(sub.products || []), product] }
                    : sub
                )
              };
            } else {
              // Regular category with products
              return {
                ...category,
                products: [...(category.products || []), product]
              };
            }
          }
          return category;
        }),
        success: 'Product added successfully!',
        error: null
      };

    case actionTypes.REMOVE_PRODUCT_FROM_CATEGORY:
      const { categoryId: catId, productId } = action.payload;
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === catId) {
            if (category.subCategories) {
              // Remove from subcategories products
              return {
                ...category,
                subCategories: category.subCategories.map(sub => ({
                  ...sub,
                  products: (sub.products || []).filter(p => p.id !== productId)
                }))
              };
            } else {
              // Remove from regular category products
              return {
                ...category,
                products: (category.products || []).filter(p => p.id !== productId)
              };
            }
          }
          return category;
        }),
        success: 'Product removed successfully!',
        error: null
      };

    case actionTypes.UPDATE_PRODUCT_IN_CATEGORY:
      const { categoryId: updateCatId, product: updatedProduct } = action.payload;
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === updateCatId) {
            if (category.subCategories) {
              // Update in subcategories products
              return {
                ...category,
                subCategories: category.subCategories.map(sub => ({
                  ...sub,
                  products: (sub.products || []).map(p =>
                    p.id === updatedProduct.id ? updatedProduct : p
                  )
                }))
              };
            } else {
              // Update in regular category products
              return {
                ...category,
                products: (category.products || []).map(p =>
                  p.id === updatedProduct.id ? updatedProduct : p
                )
              };
            }
          }
          return category;
        }),
        success: 'Product updated successfully!',
        error: null
      };

    case actionTypes.CLEAR_MESSAGES:
      return {
        ...state,
        error: null,
        success: null
      };

    default:
      return state;
  }
};

// CategoriesProvider component
export const CategoriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  // Load categories and products from local data on initial load
  useEffect(() => {
    const loadLocalData = async () => {
      try {
        setLoading(true);
        // Use the local data directly
        dispatch({ type: actionTypes.SET_CATEGORIES, payload: localCategories });
        setLoading(false);
      } catch (error) {
        console.error('Error loading local data:', error);
        setError('Failed to load data');
        setLoading(false);
      }
    };

    loadLocalData();
  }, []);

  // Actions
  const setLoading = (loading) => {
    dispatch({ type: actionTypes.SET_LOADING, payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: actionTypes.SET_ERROR, payload: error });
  };

  const setSuccess = (message) => {
    dispatch({ type: actionTypes.SET_SUCCESS, payload: message });
  };

  const clearMessages = () => {
    dispatch({ type: actionTypes.CLEAR_MESSAGES });
  };

  const addProductToCategory = (categoryId, product) => {
    dispatch({
      type: actionTypes.ADD_PRODUCT_TO_CATEGORY,
      payload: { categoryId, product }
    });
  };

  const removeProductFromCategory = (categoryId, productId) => {
    dispatch({
      type: actionTypes.REMOVE_PRODUCT_FROM_CATEGORY,
      payload: { categoryId, productId }
    });
  };

  const updateProductInCategory = (categoryId, product) => {
    dispatch({
      type: actionTypes.UPDATE_PRODUCT_IN_CATEGORY,
      payload: { categoryId, product }
    });
  };

  const value = {
    ...state,
    setLoading,
    setError,
    setSuccess,
    clearMessages,
    addProductToCategory,
    removeProductFromCategory,
    updateProductInCategory
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

// Custom hook to use categories context
export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
};