import { Page, MapTo, withModel } from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from '../Text';

export default withModel(Page, { injectPropsOnInit: true });

MapTo('venia/components/text')(Text, TextEditConfig);
