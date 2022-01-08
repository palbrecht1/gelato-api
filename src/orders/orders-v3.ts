import { GelatoApiBase } from '../base';
import { GelatoApiInterfaces as I } from '../interfaces';

export class GelatoOrdersV3Api extends GelatoApiBase {
  static baseUrl = 'https://order.gelatoapis.com/v3/orders';

  constructor(config: I.Config) {
    super(config);
  }

  create(order: I.OrderCreateRequest): Promise<I.Order> {
    return this.handleResponse(this.axios.post('/', order));
  }

  get(orderId: string): Promise<I.Order> {
    return this.handleResponse(this.axios.get(orderId));
  }

  deleteDraft(orderId: string): Promise<void> {
    return this.handleResponse(this.axios.delete(orderId));
  }

  patchDraft(orderId: string, params: { orderType: 'draft' | 'order' }): Promise<I.Order> {
    return this.handleResponse(this.axios.patch(orderId, params));
  }

  cancel(orderId: string): Promise<void> {
    return this.handleResponse(this.axios.post(`${orderId}:cancel`));
  }

  search(params: I.OrderSearchRequest): Promise<{ orders: I.OrderSearch[] }> {
    return this.handleResponse(this.axios.post(`${GelatoOrdersV3Api.baseUrl}:search`, params));
  }
}
