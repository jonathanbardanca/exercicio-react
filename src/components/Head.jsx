import React from 'react';

const Head = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title || 'React Shop';
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.setAttribute('content', description || 'Site de compras React Shop');
  }, [title, description]);

  return null;
};

Head.defaultProps = {
  title: 'React Shop',
  description: 'Site de compras React Shop'
};

export default Head;
