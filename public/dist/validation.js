$.validate({
  modules: 'file',
});

$('[name="gender"]').on('click', function() {
  $(this).validate(); // force validation
});

// // APPLICATIONA
// $('.application-form')
//   .form({
//     fields: {
//       first_name: {
//         identifier: 'first_name',
//         rules: [{
//           type: 'empty',
//           prompt: 'Please enter your first name'
//         }]
//       },
//       last_name: {
//         identifier: 'last_name',
//         rules: [{
//           type: 'empty',
//           prompt: 'Please enter your last name'
//         }]
//       },
//       email: {
//         identifier: 'email',
//         rules: [
//           {
//             type: 'empty',
//             prompt: 'Please enter your email'
//           }
//         ]
//       },
//       phone: {
//         identifier: 'phone',
//         rules: [{
//           type: 'regExp',
//           value: /^(0){1}(7(?:(?:[0-9][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/,
//           prompt: 'Phone number format should be 0712345678'
//         }]
//       },
//       address: {
//         identifier: 'address',
//         rules: [
//           {
//             type: 'empty',
//             prompt: 'Please enter your address'
//           }
//         ]
//       },
//       gender: {
//         identifier: 'gender',
//         rules: [
//           {
//             type: 'empty',
//             prompt: 'Please choose a gender'
//           }
//         ]
//       },
//       cv: {
//         identifier: 'cv',
//         rules: [
//           {
//             type: 'empty',
//             prompt: 'Please upload a CV'
//           }
//         ]
//       },
//       pcc: {
//         identifier: 'pcc',
//         rules: [
//           {
//             type: 'empty',
//             prompt: 'Please upload a Police Clearance Certificate'
//           }
//         ]
//       },
//       graduation_cert: {
//         identifier: 'graduation_cert',
//         rules: [
//           {
//             type: 'empty',
//             prompt: 'Please upload a Graduation Certificate'
//           }
//         ]
//       },
//       transcripts: {
//         identifier: 'transcripts',
//         rules: [
//           {
//             type: 'empty',
//             prompt: 'Please upload your Transcripts'
//           }
//         ]
//       },
//       graduation_status: {
//         identifier: 'graduation_status',
//         rules: [
//           {
//             type: 'empty',
//             prompt: 'Please choose your graduation status'
//           }
//         ]
//       },
//     }
//   })
