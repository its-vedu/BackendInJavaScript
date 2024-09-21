import mongoose, {Schema} from "mongoose";


const subscriptionSchema = new Schema({
    subscriber:{   //jo mera channel subscribe kar raha hai // one who is going to subscribe

        type: Schema.Types.ObjectId,
        ref:"User"
    },
    channel:{    //jise maine subscribe kiya hai //one to whom 'subscriber' is subscribing
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    
},
{timestamps:true})




export const Subscription = mongoose.model("Subscription", subscriptionSchema)