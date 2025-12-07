
        const loginForm = document.getElementById('loginForm');
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');
        const errorFeedback = document.getElementById('errorFeedback');
        const VALID_EMAIL = 'student@planner.edu';
        const VALID_PASSWORD = '123';

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            
            errorFeedback.innerHTML = '';

            if (email === VALID_EMAIL && password === VALID_PASSWORD) {
                errorFeedback.innerHTML = '<div class="alert alert-success text-center" role="alert">Login successful! Redirecting to Dashboard...</div>';
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
                
            } else {
                errorFeedback.innerHTML = '<div class="alert alert-danger text-center" role="alert">Login failed. Please use: student@planner.edu / 123</div>';
                passwordInput.value = '';
            }
        });
