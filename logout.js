<script>
    document.addEventListener('DOMContentLoaded', function() {
        const userIcon = document.getElementById('user-icon');
        const userMenu = document.getElementById('user-menu');
        const logoutButton = document.getElementById('logout-button');

        userIcon.addEventListener('click', function(event) {
            event.preventDefault();
            userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
        });

        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            // Clear the token or perform any logout actions
            localStorage.removeItem('token');
            window.location.href = 'login.html';
        });

        // Close the menu if clicked outside
        document.addEventListener('click', function(event) {
            if (!userIcon.contains(event.target) && !userMenu.contains(event.target)) {
                userMenu.style.display = 'none';
            }
        });
    });
</script>
