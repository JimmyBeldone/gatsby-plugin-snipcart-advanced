const React = require('react');

const SnipcartStyles = ({version}) => {
  return (
    <>
    <link rel="preconnect" href="https://app.snipcart.com">
  <link rel="preconnect" href="https://cdn.snipcart.com"></link>
      <link
        rel="preload"
        href={`https://cdn.snipcart.com/themes/v${version}/default/snipcart.css`}
        as="style"
        id="snipcart-styles"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function() { var s = document.getElementById('snipcart-styles'); if(s) {s.rel =
        'stylesheet';}})();`,
        }}
      />
      <noscript>
        <link
          rel="stylesheet"
          href={`https://cdn.snipcart.com/themes/v${version}/default/snipcart.css`}
        />
      </noscript>
    </>
  );
};

module.exports = SnipcartStyles;
