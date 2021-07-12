
function payWithPaystack() {

    var handler = PaystackPop.setup({ 
        key: 'pk_test_d45a3431f0a021d77680cf52aad750bc2bd1efa7', //put your public key here
        email: 'ahmadibrahimusmanmkk@gmail.com', //put your customer's email here
        amount: 45680, //amount the customer is supposed to pay
        currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
       	ref: ''+ Math.floor((Math.random()*1000000000)+1),
       	metadata: {
       		custom_fields: [
       		{
       			display_name: "Mobile Number",
       			variable_name: "mobile_number",
       			value: "+2349016609192"
       		}
       		]
       	},
        callback: function (response) {
        	window.location = "http://0.0.0.0:8080/Paystack-Payout-/verify.php?reference=" + response.reference;
            //after the transaction have been completed
            //make post call  to the server with to verify payment 
            //using transaction reference as post data
            /*$.post("verify.php", {reference:response.reference}, function(status){
                if(status == "success")
                    //successful transaction
                    alert('Transaction was successful');
                else
                    //transaction failed
                    alert("there seems to be something"+response.reference+":"+status);
            });*/
            //alert("payment complete with:"+response.reference);
        },
        onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); //open the paystack's payment modal
}