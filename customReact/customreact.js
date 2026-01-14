

const mainContainer = document.querySelector('#root');

function customRendor(reactElement, container){
    // domElement = document.createElement(reactElement.type);

    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // container.append(domElement);

    domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    
    for (const prop in reactElement.props)
    {
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.append(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://shaastrasamvad.com/',
        target: '_blank'
    },
    children: 'Click me to visit Shaastra Samvad' 
}

customRendor(reactElement, mainContainer);