import { GelatoApiBase } from './base';
import { GelatoApiInterfaces as I } from './interfaces';
import { GelatoOrdersApi } from './orders';
import { GelatoProductApi } from './products';
import { GelatoShipmentApi } from './shipment';

export class GelatoApi extends GelatoApiBase {
  constructor(config: I.Config) {
    super(config);
  }

  readonly products = new GelatoProductApi(this.config);
  readonly shipment = new GelatoShipmentApi(this.config);
  readonly orders = new GelatoOrdersApi(this.config);
}
