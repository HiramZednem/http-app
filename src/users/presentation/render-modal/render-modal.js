import modalHTML from './render-modal.html?raw';
import './render-modal.css';
import { saveUser } from '../../use-cases/save-user';
import { getUserById } from '../../use-cases/get-user-by-id';


let modal;
let form;
let loadedUser;
export const showModal = async( id ) => {
    loadedUser = {}
    modal?.classList.remove('hide-modal');

    if(!id) return;

    const user = await getUserById(id);
    loadedUser = user;
    setFormValues(user)
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset()
}

const setFormValues = ({id, firstName, lastName, balance, isActive }) => {
    form.querySelector('[name="firstName"]').value = firstName;
    form.querySelector('[name="lastName"]').value = lastName;
    form.querySelector('[name="balance"]').value = balance;
    form.querySelector('[name="isActive"]').value = isActive;
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @returns 
 */
export const renderModal = ( element, callback ) => {
    if (modal) return;

    modal = document.createElement('div');

    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';

    modal.addEventListener('click', (event) => {
        if (event.target.classList.value !== 'modal-dialog') return;
        hideModal();
    })

    form = modal.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        const data = {...loadedUser};
        data['isActive'] = false;
        for(const [key, value] of formData) {
            if( key === 'balance' ) {
                data[key] = Number(value);
                continue;
            }

            if ( key === 'isActive' ) {
                data[key] = true;
                continue;
            }

            data[key] = value;
        }

        callback(data);
        hideModal();

    })

    element.append(modal);
}
