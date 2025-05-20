import modalHTML from './render-modal.html?raw';
import './render-modal.css';
import { saveUser } from '../../use-cases/save-user';
import { getUserById } from '../../use-cases/get-user-by-id';


let modal;
let form;

export const showModal = async( id ) => {
    modal?.classList.remove('hide-modal');

    if(!id) return;

    const user = await getUserById(id);
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset()
}

const setFormValues = ({name, lastname, balance, isActive }) => {

  // pendiente 
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

        const data = {};
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
        (data.isActive) ? data.isActive : data['isActive'] = false;

        callback(data);
        hideModal();

    })

    element.append(modal);
}
