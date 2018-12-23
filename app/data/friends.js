// module.exports = function (app) {

    // $(document).ready(function () {

        //     var friendFinderSurvey = function () {

        //         var self = this;
        //         // *** Array of question objects ***
        //         var friendsArray = [
        //             {
        //                 name: "Liz",
        //                 photoLink: "liz.png",
        //                 q1: 3,
        //                 q2: 3,
        //                 q3: 3,
        //                 q4: 3,
        //                 q5: 3
        //             },
        //             {
        //                 name: "Bill",
        //                 photoLink: "bill.png",
        //                 q1: 1,
        //                 q2: 2,
        //                 q3: 3,
        //                 q4: 4,
        //                 q5: 5
        //             },
        //             {
        //                 name: "Rachel",
        //                 photoLink: "rachel.png",
        //                 q1: 4,
        //                 q2: 2,
        //                 q3: 3,
        //                 q4: 1,
        //                 q5: 5
        //             },
        //             {
        //                 name: "Tim",
        //                 photoLink: "tim.png",
        //                 q1: 4,
        //                 q2: 4,
        //                 q3: 3,
        //                 q4: 2,
        //                 q5: 2
        //             },
        //             {
        //                 name: "Victoria",
        //                 photoLink: "vicky.png",
        //                 q1: 5,
        //                 q2: 4,
        //                 q3: 3,
        //                 q4: 2,
        //                 q5: 1
        //             }
        //         ];

        // $(".container").on("submit", function (event) {
        //     // Make sure to preventDefault on a submit event.
        //     event.preventDefault();
        //     console.log("Clicked submit");
        //     // This line of code will grab the input from the textbox
        //     var myAnswers = {};
        //     var qnum;
        //     myAnswers.name = $("#surveyName").val();
        //     myAnswers.photoLink = $("#photoImage").val();
        //     for (i = 1; i < 6; i++) {
        //         qnum = "q" + i;
        //         var myQuery = qnum + " option:selected";
        //         console.log(myQuery);
        //         myAnswers.qnum = $("q1 option:selected").val()
        //         console.log(myAnswers.qnum);
        //         console.log($("#q1").val());
        //     }
        //     console.log(myAnswers);
        //     console.log(friendsArray);
        //     // Send the POST request.
        //     $.ajax("/friends", {
        //         type: "POST",
        //         data: myAnswers
        //     }).then(
        //         function () {
        //             console.log("Survey was submitted");
        //             // Reload the page to get the updated list
        //             res.redirect('/');
        //         }
        //     );
        // });

        //         var myAnswers = [2, 4, 5, 2, 4];
        //         var friendsDifference = [];

        //         // *** Declaration of global variables ***
        //         $('#myModal').modal('hide');

        // *** Function to build and display each question and build answer buttons ***
        // this.theSurvey = function (qnum, questionList) {

        //     var self = this;;

        //     // *** Capture the answer button the user selected ***
        //     $("#submit").on("click", function (event) {
        //         event.preventDefault();
        //         console.log("Clicked submit");
        //         // This line of code will grab the input from the textbox
        //         var myAnswers = {};
        //         var qnum;
        //         myAnswers.name = $("#surveyName").val();
        //         myAnswers.photoLink = $("#photoImage").val();
        //         for (i = 1; i < 6; i++) {
        //             qnum = "q" + i;
        //             var myQuery = qnum + " option:selected";
        //             console.log(myQuery);
        //             myAnswers.qnum = $("q1 option:selected").val()
        //             console.log(myAnswers.qnum);
        //             console.log($("#q1").val());
        //         }
        //         console.log(myAnswers);
        //         console.log(friendsArray);
        //     });

        //         // $('#myModal').modal('show');

        //     }
        // }

        //     for (var count = 0; count < friendsArray.length; count++) {
        //     findTheDifference(count);
        // }
        // var closestMatch = Math.min.apply(null, friendsDifference);
        // console.log(friendsDifference);
        // var matchIndex = friendsDifference.findIndex(closestMatch);
        // var yourBestFriend = friendsArray[matchIndex].name;
        // console.log("You Should meet: " + yourBestFriend);

        // function findTheDifference(count) {
        //     var name = friendsArray[count].name;
        //     var yourScores = [];
        //     var difference = 0;
        //     // yourScores.push(name);
        //     yourScores.push(friendsArray[count].q1);
        //     yourScores.push(friendsArray[count].q2);
        //     yourScores.push(friendsArray[count].q3);
        //     yourScores.push(friendsArray[count].q4);
        //     yourScores.push(friendsArray[count].q5);

        //     for (var i = 0; i < myAnswers.length; i++) {
        //         difference += Math.abs(myAnswers[i] - yourScores[i]);
        //     }

        //     console.log("Final Difference= " + difference);
        //     console.log(name, yourScores)
        //     friendsDifference.push(difference);
        //     return (friendsDifference);
    // }
// $(document).ready(function () {
//     var survey = new friendFinderSurvey();
//     survey.theSurvey();
//     findAFriend(myAnswers, friendsArray);
// })

// })