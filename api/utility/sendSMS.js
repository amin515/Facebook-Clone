
export const sendSMS = async (Number, Message) => {
  
    try {
  
      await axios.post(` https://bulksmsbd.net/api/smsapi?api_key=IGM1aPK46DxE5wXZO5Qu&type=text&number=${Number}&senderid=(Approved Sender ID)&message=${Message}`)
      
  
    } catch (error) {
       console.log(error)
    }
    
  }