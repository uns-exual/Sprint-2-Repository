// for allow only letters  

function isValid(name)
{
  var fieldletter = /^[a-z]+$/i;
  
  if ((name.match(fieldletter))) {
      return true
  }
  
}

$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    },
                    callback: {
                        message: 'Please enter only letters',
                        callback: function(name, validator, $fieldletter) {
                            if (isValid(name)) {
                                return {
                                    valid: false,
                                };
                             }
                        }
                    }
                },
                
             },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    },
                callback: {
                        message: 'please enter only letters',
                        callback: function(name, validator, $fieldletter) {
                            if (isValid(name)) {
                                return {
                                    valid: false,
                                };
                             }
                        }
                    }
                },
                
             },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Enter your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                },
                
             },
            confirmEmail: {
                validators: {
                    notEmpty: {
                        message: 'Enter your email address'
                    },
                  identical: {
                        field: 'email',
                        message: 'The email entered does not match'
                    }
                },
                
             },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Enter your phone number'
                    },
                    phone: {
                        country: 'AU',
                        message: 'Please supply a valid phone number'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            subject: {
                validators: {
                      stringLength: {
                        min: 1,
                      },
                    notEmpty: {
                        message: 'Please include a subject'
                    }
                    }
                },
            message: {
                validators: {
                      stringLength: {
                        max: 200,
                        message:'Please enter no more than 200'
                    },
                    notEmpty: {
                        message: 'Please write what you want to send'
                    }
                    }
                }
            }
        })
      .on('success.form.bv', function(e) {
       $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something 
        $('#contact_form').data('bootstrapValidator').resetForm();

        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        $.post($form.attr('action'), $form.serialize(), function(result) {
             console.log(result);
         }, 'json');
     });
});