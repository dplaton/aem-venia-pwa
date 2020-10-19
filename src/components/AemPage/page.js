import { Page, MapTo, withModel } from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from '../Text';
import Teaser from '../aem/Teaser';

MapTo('venia/components/commerce/productteaser', Teaser);
MapTo('venia/components/text')(Text, TextEditConfig);

export default withModel(Page, { injectPropsOnInit: true });
