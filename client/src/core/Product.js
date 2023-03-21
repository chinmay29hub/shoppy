import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import Layout from './Layout';
import ***REMOVED*** read, listRelated ***REMOVED***from './apiCore';
import Card from './Card';

const Product = (props) => ***REMOVED***
  const [product, setProduct] = useState(***REMOVED***});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => ***REMOVED***
    read(productId).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setError(data.error);
      ***REMOVED***else ***REMOVED***
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => ***REMOVED***
          if (data.error) ***REMOVED***
            setError(data.error);
          ***REMOVED***else ***REMOVED***
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => ***REMOVED***
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <Layout
      title=***REMOVED***product && product.name}
      description=***REMOVED***
        product && product.description && product.description.substring(0, 100)
      }
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4 col-sm-12'>
          <h4>Product Details</h4>
          ***REMOVED***product && product.description && (
            <Card product=***REMOVED***product***REMOVED***showViewProductButton=***REMOVED***false***REMOVED***/>
          )}
        </div>

        <div className='col-md-4'>
          <h4>Related products</h4>
          ***REMOVED***relatedProduct.map((p, i) => (
            <div className='mb-3' key=***REMOVED***i}>
              <Card product=***REMOVED***p***REMOVED***/>
            </div>
          ))}
        </div>
        <div className='col-md-2'></div>
      </div>
    </Layout>
  );
};

export default Product;
