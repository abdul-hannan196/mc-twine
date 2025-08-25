import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        required: [true, 'User ID is required. Please ensure user is authenticated.']
    },
    items: { 
        type: Array, 
        required: [true, 'Order items are required'] 
    },
    amount: { 
        type: Number, 
        required: [true, 'Order amount is required'] 
    },
    address: { 
        type: Object, 
        required: [true, 'Delivery address is required'] 
    },
    status: { 
        type: String, 
        required: true, 
        default:'Order Placed' 
    },
    paymentMethod: { 
        type: String, 
        required: [true, 'Payment method is required'] 
    },
    payment: { 
        type: Boolean, 
        required: true, 
        default: false 
    },
    date: {
        type: Number, 
        required: [true, 'Order date is required']
    }
})

const orderModel = mongoose.models.order || mongoose.model('order',orderSchema)
export default orderModel;