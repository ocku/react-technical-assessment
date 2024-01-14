export default {
  actions: {
    view: 'actions.view',
    edit: 'actions.edit',
    save: 'actions.save',
    delete: 'actions.delete',
    add: 'actions.add',
    close: 'actions.close',
  },

  models: {
    product: {
      id: 'models.product.id',
      name: 'models.product.name',
      description: 'models.product.description',
      price: 'models.product.price',
      taxPercentage: 'models.product.taxPercentage',
      total: 'models.product.total',
    },

    orderAggregateProductModel: {
      amount: 'models.orderAggregateProductModel.amount',
    },

    orderAggregateModel: {
      id: 'models.orderAggregateModel.id',
      price: 'models.orderAggregateModel.price',
      withTax: 'models.orderAggregateModel.withTax',
    },
  },

  home: {
    title: 'home.title',
    description: 'home.description',
  },

  products: {
    title: 'products.title',
    description: 'products.description',

    pagination: {
      ariaLabel: 'products.pagination.ariaLabel',
    },
  },

  createProduct: {
    title: 'createProduct.title',
    description: 'createProduct.description',
  },

  productSearchDialog: {
    label: 'productSearchDialog.label',
  },

  orders: {
    title: 'orders.title',
    description: 'orders.description',

    pagination: {
      ariaLabel: 'orders.pagination.ariaLabel',
    },
  },

  createOrder: {
    title: 'createOrder.title',
    description: 'createOrder.description',
  },

  updateOrder: {
    title: 'updateOrder.title',
    description: 'updateOrder.description',
  },

  pagination: {
    next: 'pagination.next',
    previous: 'pagination.previous',
  },

  loader: {
    message: 'loader.message',
  },

  error: {
    title: 'error.generic.title',
    description: 'error.generic.description',
    retry: 'error.generic.retry',
  },

  empty: {
    title: 'empty.generic.title',
    description: 'empty.generic.description',
  },
};
