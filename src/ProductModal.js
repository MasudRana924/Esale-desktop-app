import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    p: 4,
};
const ProductModal = ({ open, handleClose, selectedProductIndex, products, handlePrevious, handleNext }) => {
    const handleBuyNow = async () => {

        try {
            const selectedProduct = products[selectedProductIndex];
            const { data } = await axios.post('http://localhost:5000/api/bkash/payment/create', { amount: selectedProduct.price, orderId: 1 }, { withCredentials: true });
            console.log("data-----", data);
            window.location.href = data.bkashURL

        } catch (error) {
            console.log(error.response.data)
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {selectedProductIndex !== null && (
                    <div >
                        <div className="flex justify-between gap-4">
                            <div className="aspect-h-1 aspect-w-1 w-3/4 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={products[selectedProductIndex].imageSrc}
                                    alt={products[selectedProductIndex].imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <div className="w-full">
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {products[selectedProductIndex].name}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Price: ${products[selectedProductIndex].price}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Price: {products[selectedProductIndex].imageAlt}
                                </Typography>
                                <Button onClick={handleBuyNow} variant="contained" color="primary" style={{ marginTop: 8 }}>
                                    Buy Now
                                </Button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                            <Button onClick={handlePrevious} disabled={selectedProductIndex === 0}>
                                Previous
                            </Button>
                            <Button onClick={handleNext} disabled={selectedProductIndex === products.length - 1}>
                                Next
                            </Button>
                        </div>
                    </div>
                )}
            </Box>
        </Modal>
    );
};

export default ProductModal;