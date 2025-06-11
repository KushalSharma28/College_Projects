/* Register Page JS Script*/

        // Multi-step form functionality
        document.querySelectorAll('.next-step').forEach(button => {
            button.addEventListener('click', function() {
                const currentStep = this.closest('.form-step');
                const nextStepId = this.getAttribute('data-next');
                
                // Validate current step before proceeding
                if (validateStep(currentStep.id)) {
                    currentStep.classList.remove('active');
                    document.getElementById(nextStepId).classList.add('active');
                    updateStepIndicator(nextStepId);
                }
            });
        });
        
        document.querySelectorAll('.prev-step').forEach(button => {
            button.addEventListener('click', function() {
                const currentStep = this.closest('.form-step');
                const prevStepId = this.getAttribute('data-prev');
                
                currentStep.classList.remove('active');
                document.getElementById(prevStepId).classList.add('active');
                updateStepIndicator(prevStepId);
            });
        });
        
        function updateStepIndicator(activeStepId) {
            const steps = ['step1', 'step2', 'step3'];
            const activeIndex = parseInt(activeStepId.replace('step', '').replace('-form', '')) - 1;
            
            steps.forEach((step, index) => {
                const stepElement = document.getElementById(step);
                if (index < activeIndex) {
                    stepElement.classList.remove('active');
                    stepElement.classList.add('completed');
                } else if (index === activeIndex) {
                    stepElement.classList.add('active');
                    stepElement.classList.remove('completed');
                } else {
                    stepElement.classList.remove('active', 'completed');
                }
            });
        }
        
        function validateStep(stepId) {
            // Simple validation - in a real app you'd want more robust validation
            if (stepId === 'step1-form') {
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const email = document.getElementById('email').value;
                
                if (!firstName || !lastName || !email) {
                    alert('Please fill in all required fields');
                    return false;
                }
            } else if (stepId === 'step2-form') {
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                if (password !== confirmPassword) {
                    alert('Passwords do not match');
                    return false;
                }
                
                if (password.length < 8) {
                    alert('Password must be at least 8 characters');
                    return false;
                }
            }
            return true;
        }
        
        // Password strength indicator
        document.getElementById('password').addEventListener('input', function() {
            const password = this.value;
            const strengthBar = document.getElementById('passwordStrength');
            let strength = 0;
            
            if (password.length >= 8) strength += 25;
            if (/[A-Z]/.test(password)) strength += 25;
            if (/[0-9]/.test(password)) strength += 25;
            if (/[^A-Za-z0-9]/.test(password)) strength += 25;
            
            strengthBar.style.width = strength + '%';
            
            if (strength < 50) {
                strengthBar.style.backgroundColor = '#dc3545';
            } else if (strength < 75) {
                strengthBar.style.backgroundColor = '#fd7e14';
            } else {
                strengthBar.style.backgroundColor = '#198754';
            }
        });
        
        // Toggle password visibility
        document.getElementById('togglePassword1').addEventListener('click', function() {
            togglePasswordVisibility('password', this);
        });
        
        document.getElementById('togglePassword2').addEventListener('click', function() {
            togglePasswordVisibility('confirmPassword', this);
        });
        
        function togglePasswordVisibility(inputId, button) {
            const input = document.getElementById(inputId);
            const icon = button.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        }
        
        // Form submission
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, you would send the data to the server here
            alert('Registration successful! Redirecting to dashboard...');
            // window.location.href = '/dashboard';
        });