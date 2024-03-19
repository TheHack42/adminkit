window.notify = {
    open: function (type, message, duration, position) {
        const icons = {
            success: 'fa-circle-check',
            warning: 'fa-triangle-exclamation',
            danger: 'fa-circle-xmark',
            info: 'fa-circle-info',
        };

        let container = document.querySelector('.notify-container');
        if (!container) {
            container = document.createElement('div');
            container.setAttribute('class', 'notify-container position-fixed');
            container.style.zIndex = '3000';
            document.querySelector('body').appendChild(container);
        }

        position = position || {
            x: 'right',
            y: 'top',
        };

        const posMapping = {
            'right': 'end-0',
            'left': 'start-0',
            'center': 'start-50',
            'top': 'top-0',
            'bottom': 'bottom-0',
        };

        for (const classe in posMapping) {
            container.classList.remove(posMapping[classe]);
        }

        container.classList.add(posMapping[position.x], posMapping[position.y]);


        const elToast = document.createElement('div');
        elToast.setAttribute('class', 'toast notify');

        const elBody = document.createElement('div');
        elBody.setAttribute('class', `toast-body bg-${type}`);
        elBody.innerText = message;
        elToast.appendChild(elBody);

        const elIcon = document.createElement('i');
        elIcon.setAttribute('class', `fa-solid ${icons[type]} me-2 fs-3`);
        elBody.insertBefore(elIcon, elBody.firstChild);

        container.insertBefore(elToast, container.firstChild);

        const toast = new bootstrap.Toast(elToast);
        toast.show();

        elToast.addEventListener('hidden.bs.toast', () => {
            elToast.remove();
        });

        setTimeout(() => {
            toast.hide()
        }, duration || 5000);
    }
}
