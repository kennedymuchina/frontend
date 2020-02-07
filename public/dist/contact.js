$(document).ready(function() {
  $('#submit_email').click(function(e) {
    console.log();
    e.preventDefault();
    const isValid = $(e.target)
      .parents('form')
      .isValid();
    if (isValid) {
      const recaptcha = grecaptcha.getResponse();
      const name = $('#name').val();
      const email = $('#email').val();
      const subject = $('#subject').val();
      const message = $('#message').val();
      if (recaptcha.length === 0) {
        document.getElementById('captcha').innerHTML =
          "You can't leave Captcha Code empty";
        return false;
      }
      if (recaptcha.length !== 0) {
        document.getElementById('captcha').innerHTML = 'Captcha completed';
        $('.disabledCheckboxes').prop('disabled', true);
        $.post('api/email/submit', {
          name,
          email,
          message,
          subject,
          recaptcha,
        }).done(function() {
          grecaptcha.reset();
          document.getElementById('captcha').innerHTML = '';
        });
        grecaptcha.reset();
        document.getElementById('captcha').innerHTML = '';
        $('.flash-messages')
          .removeClass('hidden')
          .fadeOut(5000);
        $(e.target)
          .parents('form')
          .trigger('reset');
      }
      //   const $submitted_email = $('.submitted_email');
      //   $('.submit_email_form').hide();
      //   $submitted_email.attr(
      //     'style',
      //     `${$submitted_email.attr('style')}; ` + `display: block !important`
      //   );
    }
  });

  // function get_action(form)
  //     {
  //         var v = grecaptcha.getResponse();
  //         if(v.length == 0)
  //         {
  //             document.getElementById('captcha').innerHTML="You can't leave Captcha Code empty";
  //             return false;
  //         }
  //         else
  //         {
  //             document.getElementById('captcha').innerHTML="Captcha completed";
  //             return true;
  //         }
  // }

  $('.window_close').on('click', function() {
    $('.submit_email_form').show();
    $('.submitted_email').hide();
  });
});
