$(document).ready(function () {
    $('#card1').hover(

    function () {
        $('#back1').addClass("cardb_flip");
        $('#front1').addClass("cardf_flip");
    },
    function () {
        $('#back1').removeClass("cardb_flip");
        $('#front1').removeClass("cardf_flip");
    }
    );
    $('#card2').hover(

        function () {
            $('#back2').addClass("cardb_flip");
            $('#front2').addClass("cardf_flip");
        },
        function () {
            $('#back2').removeClass("cardb_flip");
            $('#front2').removeClass("cardf_flip");
        }
        );
        $('#card3').hover(

            function () {
                $('#back3').addClass("cardb_flip");
                $('#front3').addClass("cardf_flip");
            },
            function () {
                $('#back3').removeClass("cardb_flip");
                $('#front3').removeClass("cardf_flip");
            }
            );
});