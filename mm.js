  $().ready(function () {
            $("#signupForm").validate({
                // in 'rules' user have to specify all the constraints for respective fields
                rules: {
                    name: {
                        required: true,
                        minlength: 4 , //for length of name,
                        maxlength: 16
                    },
                    password: {
                        required: true,
                        minlength: 6
                    },
                    confirm_password: {
                        required: true,
                        minlength: 6,
                        equalTo: "#password" //for checking both passwords are same or not
                    },
                    email: {
                        required: true,
                        email: true
                    },
                },
                messages: {
                    name: {
                        required: "Enter your Full Name",
                        minlength: "Minimum 4 characters",
                        maxlength:'Please enter no more than 16 characters.'
                    },
                    password: {
                        required: "Please enter a password",
                        minlength: "Password minimum 6 character.",
                        maxlength:'Please enter no more than 16 characters.'
                    },
                    confirm_password: {
                        required: "Please enter a password",
                        minlength: "Password minimum 6 characters",
                        equalTo: "Please enter the same password as above."
                    },
                    email:{
                        required:'Enter your Email Address'
                    }
                }
            });
        });