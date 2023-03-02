$("Buy").Click(function() {

            var name = $("#name").val();
            var name = $("#email").val();
            var name = $("#Phone").val();
            var name = $("#message").val();

            if (name == '' || email == '' || Phone == '') {

                swal({
                    title: "fildes Empty!!",
                    text: "plaese chexk the missing field!!",
                    icon: "WARNING",
                    button: "ok",
                });
            } else {
                swal({
                    title: "fildes Empty!!",
                    text: "plaese chexk the missing field!!",
                    icon: "WARNING",
                    button: "ok",
                });
            );