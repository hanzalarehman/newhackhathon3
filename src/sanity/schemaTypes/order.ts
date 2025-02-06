

import { defineType } from "sanity"



export let order =defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(100)
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(100)
      },
      {
        name: 'companyName',
        title: 'Company Name (Optional)',
        type: 'string',
        validation: Rule => Rule.max(100)
      },
      {
        name: 'country',
        title: 'Country ',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(100)
      },
      {
        name: 'address',
        title: 'Street Address',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(255)
      },
      {
        name: 'town',
        title: 'Town',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(100)
      },
      {
        name: 'province',
        title: 'Province',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(100)
      },
      {
        name: 'zipCode',
        title: 'ZIP Code',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(20)
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
        validation: Rule => Rule.required().min(10).max(20)
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'additionalInfo',
        title: 'Additional Information',
        type: 'text', // Optional field, allows for more text input
        validation: Rule => Rule.max(500)
      },
      {
        name: 'discount',
        title: 'Discount',
        type: 'number',
      },
      {
       name:"cartItems",
       title:"Cart Items",
       type:"array",
       of:[{type:'reference',to:{type:'product'}}]
      },
      {
           name:'total',
            title:'Total',
            type:'number',
      },
      {
        name:"status",
        title:"Order Status",
        type:"string",
        options:{
          list:[
            {title:"Pending",value:"pending"},
            {title:"Processing",value:"processing"},
            {title:"Completed",value:"completed"},
            {title:"Cancelled",value:"cancelled"},
          ],
          layout:"radio"
        },
        initialValue:"pending"
      }
      
    ]
  }
)
// {
//     name: 'paymentMethod',
//     title: 'Payment Method',
//     type: 'string',
//     options: {
//       list: [
//         { title: 'Credit Card', value: 'credit-card' },
//         { title: 'PayPal', value: 'paypal' },
//         { title: 'Bank Transfer', value: 'bank-transfer' },
//         { title: 'Cash on Delivery', value: 'cash-on-delivery' }
//       ],
//       layout: 'radio'
//     },
//     validation: Rule => Rule.required()
//   },
//   {
//     name: 'shippingMethod',
//     title: 'Shipping Method',
//     type: 'string',
//     options: {
//       list: [
//         { title: 'Standard Shipping', value: 'standard-shipping' },
//         { title: 'Express Shipping', value: 'express-shipping' }
//       ],
//       layout: 'radio'
//     },
//     validation: Rule => Rule.required()
//   },
//   {
//     name: 'shippingCost',
//     title: 'Shipping Cost',
//     type: 'number',
//     validation: Rule => Rule.required()
//   },
//   {
//     name: 'isGift',
//     title: 'Is this a gift?',
//     type: 'boolean'
//   },
//   {
//     name: 'giftMessage',
//     title: 'Gift Message',
//     type: 'text',
//     validation: Rule => Rule.max(500)
//   }