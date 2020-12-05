const React = require("react");

const Snipcart = ({ publicApiKey, currency, innerHTML, openCartOnAdd, modalStyle }) => (
  <div
    hidden
    id="snipcart"
    data-api-key={publicApiKey}
    data-currency={currency}
    data-config-add-product-behavior={openCartOnAdd === false ? "none" : null}
    data-config-modal-style={modalStyle}
    dangerouslySetInnerHTML={{
      __html: `
        ${innerHTML}
      `,
    }}
  />
);

Snipcart.defaultProps = {
  currency: "usd",
  innerHTML: "",
  openCartOnAdd: true,
  modalStyle: 'side'
};

module.exports = Snipcart;
