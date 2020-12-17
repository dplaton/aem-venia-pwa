const myName = '@adobe/aem-core-components';
const {Targetables} = require('@magento/pwa-buildpack');
module.exports = (targets) => {
    const aemComponents = Targetables.using(targets);
    aemComponents.setSpecialFeatures('esModules', 'cssModules');

    targets.of('@magento/venia-ui').richContentRenderers.tap((richContentRenderers) => {
        richContentRenderers.add({
            componentName: 'AemPage',
            importPath: myName,
        });
    });
};
