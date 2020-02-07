import './style.css';

(function() {
  function handleLoagin() {
    const loadingContainer = document.createElement('div');
    loadingContainer.id = 'init-loading-container';
    loadingContainer.className = 'init-loading__container';

    const maskContainer = document.createElement('div');
    maskContainer.id = 'init-loading-mask';
    maskContainer.className = 'init-loading__mask';

    const logoContainer = document.createElement('div');
    logoContainer.id = 'init-loading-logo-conainer';
    logoContainer.className = 'init-loading__logo-conainer';

    const shadowContainer = document.createElement('div');
    shadowContainer.id = 'init-loading-shaow-conainer';
    shadowContainer.className = 'init-loading__shaow-conainer';

    const udnLogo = document.createElement('i');
    udnLogo.id = 'init-loading-udn-logo';
    udnLogo.className = 'udn-icon udn-icon-logo';

    document.getElementsByTagName('body')[0].appendChild(loadingContainer);
    document.getElementById('init-loading-container').appendChild(maskContainer);
    document.getElementById('init-loading-container').appendChild(logoContainer);
    document.getElementById('init-loading-container').appendChild(shadowContainer);
    document.getElementById('init-loading-logo-conainer').appendChild(udnLogo);
    console.log('loading');
  }

  function handeInteractive() {
    document.getElementById('init-loading-container').className = 'init-loading__container init-loading__container--disabled';
    document.getElementById('init-loading-mask').className = 'init-loading__mask init-loading__mask--disabled';
    console.log('interactive');
  }
  
  function handeComplete() {
    setTimeout(() => {
      document.getElementById('init-loading-container').remove();
    }, 1000);
    console.log('complete');
  }

  handleLoagin();
  document.onreadystatechange = () => {
    // if (document.readyState === 'loading') handleLoagin();
    if (document.readyState === 'interactive') handeInteractive();
    if (document.readyState === 'complete') handeComplete();
  }
})();
  