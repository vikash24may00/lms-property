
// import { LightningElement, wire } from 'lwc';
// import { subscribe, MessageContext, publish } from 'lightning/messageService';
// import PROPERTY_MESSAGE_CHANNEL from '@salesforce/messageChannel/PropertyMessageChannel__c';
// import deleteProperty from '@salesforce/apex/PropertyController.deleteProperty';
// import updateProperty from '@salesforce/apex/PropertyController.updatePropertyItems1';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// export default class PropertySubscriber extends LightningElement {
//      propertyItems;
//     error;
//      editProperty = {};
//      propertyToDelete;
//      isEditModalOpen = false;
//      isDeleteModalOpen = false;

//     @wire(MessageContext)
//     messageContext;

//     connectedCallback() {
//         this.subscribeToMessageChannel();
//     }

//     subscribeToMessageChannel() {
//         this.subscription = subscribe(
//             this.messageContext,
//             PROPERTY_MESSAGE_CHANNEL,
//             (message) => this.handleMessage(message)
//         );
//     }

//     handleMessage(message) {
//         if (message && message.properties) {
//             this.propertyItems = message.properties;
//             this.error = undefined;
//         } else {
//             this.error = 'No properties found';
//             this.propertyItems = undefined;
//         }
//     }

//     disconnectedCallback() {
//         if (this.subscription) {
//             this.subscription = null;
//         }
//     }

//     handleEditProperty(event) {
//         const propertyId = event.target.dataset.id;
//         this.editProperty = { ...this.propertyItems.find(property => property.Id === propertyId) };
//         this.isEditModalOpen = true;
//     }

//     handleInputChange(event) {
//         const field = event.target.dataset.id;
//         this.editProperty = { ...this.editProperty, [field]: event.target.value };
//     }

//     closeEditModal() {
//         this.isEditModalOpen = false;
//     }

//     saveProperty() {
//         updateProperty({ property: this.editProperty })
//             .then(() => {
//                 this.showToast('Success', 'Property updated successfully', 'success');
//                 this.updatePropertyList(this.editProperty);
//                 this.closeEditModal();
//             })
//             .catch(error => {
//                 this.showToast('Error', 'Error updating property', 'error');
//                 console.error(error);
//             });
//     }

//     confirmDeleteProperty(event) {
//         const propertyId = event.target.dataset.id;
//         this.propertyToDelete = this.propertyItems.find(property => property.Id === propertyId);
//         this.isDeleteModalOpen = true;
//     }

//     handleDeleteProperty() {
//         deleteProperty({ propertyId: this.propertyToDelete.Id })
//             .then(() => {
//                 this.showToast('Success', 'Property deleted successfully', 'success');
//                 this.removePropertyFromList(this.propertyToDelete.Id);
//                 this.closeDeleteModal();
//             })
//             .catch(error => {
//                 this.showToast('Error', 'Error deleting property', 'error');
//                 console.error(error);
//             });
//     }

//     closeDeleteModal() {
//         this.isDeleteModalOpen = false;
//     }

//     removePropertyFromList(propertyId) {
//         this.propertyItems = this.propertyItems.filter(property => property.Id !== propertyId);
//     }

//     updatePropertyList(updatedProperty) {
//         this.propertyItems = this.propertyItems.map(property =>
//             property.Id === updatedProperty.Id ? { ...updatedProperty } : property
//         );
//         this.publishUpdatedProperties();
//     }

//     publishUpdatedProperties() {
//         const message = {
//             properties: this.propertyItems
//         };
//         publish(this.messageContext, PROPERTY_MESSAGE_CHANNEL, message);
//     }

//     showToast(title, message, variant) {
//         const event = new ShowToastEvent({
//             title,
//             message,
//             variant,
//         });
//         this.dispatchEvent(event);
//     }
// }

// import { LightningElement, wire } from 'lwc';
// import { subscribe, MessageContext, publish } from 'lightning/messageService';
// import PROPERTY_MESSAGE_CHANNEL from '@salesforce/messageChannel/PropertyMessageChannel__c';
// import deleteProperty from '@salesforce/apex/PropertyController.deleteProperty';
// import updateProperty from '@salesforce/apex/PropertyController.updatePropertyItems1';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// export default class PropertySubscriber extends LightningElement {
//     propertyItems;
//     error;
//     editProperty = {};
//     propertyToDelete;
//     isEditModalOpen = false;
//     isDeleteModalOpen = false;
//     subscription = null;

//     @wire(MessageContext)
//     messageContext;

//     connectedCallback() {
//         this.subscribeToMessageChannel();
//     }

//     subscribeToMessageChannel() {
//         if (!this.subscription) {
//             this.subscription = subscribe(
//                 this.messageContext,
//                 PROPERTY_MESSAGE_CHANNEL,
//                 (message) => this.handleMessage(message)
//             );
//         }
//     }

//     handleMessage(message) {
//         if (message && message.properties) {
//             this.propertyItems = message.properties;
//             this.error = undefined;
//         } else {
//             this.error = 'No properties found';
//             this.propertyItems = undefined;
//         }
//     }

//     disconnectedCallback() {
//         if (this.subscription) {
//             this.subscription.unsubscribe();
//             this.subscription = null;
//         }
//     }

//     handleEditProperty(event) {
//         const propertyId = event.target.dataset.id;
//         this.editProperty = { ...this.propertyItems.find(property => property.Id === propertyId) };
//         this.isEditModalOpen = true;
//     }

//     handleInputChange(event) {
//         const field = event.target.dataset.id;
//         this.editProperty = { ...this.editProperty, [field]: event.target.value };
//     }

//     closeEditModal() {
//         this.isEditModalOpen = false;
//     }

//     saveProperty() {
//         updateProperty({ property: this.editProperty })
//             .then(() => {
//                 this.showToast('Success', 'Property updated successfully', 'success');
//                 this.updatePropertyList(this.editProperty);
//                 this.closeEditModal();
//             })
//             .catch(error => {
//                 this.showToast('Error', 'Error updating property', 'error');
//                 console.error(error);
//             });
//     }

//     confirmDeleteProperty(event) {
//         const propertyId = event.target.dataset.id;
//         this.propertyToDelete = this.propertyItems.find(property => property.Id === propertyId);
//         this.isDeleteModalOpen = true;
//     }

//     handleDeleteProperty() {
//         deleteProperty({ propertyId: this.propertyToDelete.Id })
//             .then(() => {
//                 this.showToast('Success', 'Property deleted successfully', 'success');
//                 this.removePropertyFromList(this.propertyToDelete.Id);
//                 this.closeDeleteModal();
//             })
//             .catch(error => {
//                 this.showToast('Error', 'Error deleting property', 'error');
//                 console.error(error);
//             });
//     }

//     closeDeleteModal() {
//         this.isDeleteModalOpen = false;
//     }

//     removePropertyFromList(propertyId) {
//         this.propertyItems = this.propertyItems.filter(property => property.Id !== propertyId);
//     }

//     updatePropertyList(updatedProperty) {
//         this.propertyItems = this.propertyItems.map(property =>
//             property.Id === updatedProperty.Id ? { ...updatedProperty } : property
//         );
//         this.publishUpdatedProperties();
//     }

//     publishUpdatedProperties() {
//         const message = {
//             properties: this.propertyItems
//         };
//         publish(this.messageContext, PROPERTY_MESSAGE_CHANNEL, message);
//     }

//     showToast(title, message, variant) {
//         const event = new ShowToastEvent({
//             title,
//             message,
//             variant,
//         });
//         this.dispatchEvent(event);
//     }
// }


import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext, publish } from 'lightning/messageService';
import PROPERTY_MESSAGE_CHANNEL from '@salesforce/messageChannel/PropertyMessageChannel__c';
import deleteProperty from '@salesforce/apex/PropertyController.deleteProperty';
import updateProperty from '@salesforce/apex/PropertyController.updatePropertyItems1';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PropertySubscriber extends LightningElement {
    propertyItems;  // Stores the list of property items
    error;  // Stores error message
    editProperty = {};  // Stores the property being edited
    propertyToDelete;  // Stores the property to be deleted
    isEditModalOpen = false;  // Boolean to control edit modal visibility
    isDeleteModalOpen = false;  // Boolean to control delete modal visibility
    subscription = null;  // Subscription reference to the message channel

    @wire(MessageContext)
    messageContext;  // Wire the MessageContext to interact with the message service

    connectedCallback() {
        // Subscribe to the message channel when the component is initialized
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                PROPERTY_MESSAGE_CHANNEL,
                (message) => this.handleMessage(message)
            );
        }
    }

    handleMessage(message) {
        // Handle incoming messages from the message channel
        if (message && message.properties) {
            this.propertyItems = message.properties;
            this.error = undefined;
        } else {
            this.error = 'No properties found';
            this.propertyItems = undefined;
        }
    }

    disconnectedCallback() {
        // Unsubscribe from the message channel when the component is destroyed
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }

    handleEditProperty(event) {
        // Open the edit modal with the selected property's details
        const propertyId = event.target.dataset.id;
        this.editProperty = { ...this.propertyItems.find(property => property.Id === propertyId) };
        this.isEditModalOpen = true;
    }

    handleInputChange(event) {
        // Update the editProperty object when input fields change
        const field = event.target.dataset.id;
        this.editProperty = { ...this.editProperty, [field]: event.target.value };
    }

    closeEditModal() {
        // Close the edit modal
        this.isEditModalOpen = false;
    }

    saveProperty() {
        // Save the edited property
        updateProperty({ property: this.editProperty })
            .then(() => {
                this.showToast('Success', 'Property updated successfully', 'success');
                this.updatePropertyList(this.editProperty);
                this.closeEditModal();
            })
            .catch(error => {
                this.showToast('Error', 'Error updating property', 'error');
                console.error(error);
            });
    }

    confirmDeleteProperty(event) {
        // Open the delete confirmation modal with the selected property's details
        const propertyId = event.target.dataset.id;
        this.propertyToDelete = this.propertyItems.find(property => property.Id === propertyId);
        this.isDeleteModalOpen = true;
    }

    handleDeleteProperty() {
        // Delete the selected property
        deleteProperty({ propertyId: this.propertyToDelete.Id })
            .then(() => {
                this.showToast('Success', 'Property deleted successfully', 'success');
                this.removePropertyFromList(this.propertyToDelete.Id);
                this.closeDeleteModal();
            })
            .catch(error => {
                this.showToast('Error', 'Error deleting property', 'error');
                console.error(error);
            });
    }

    closeDeleteModal() {
        // Close the delete confirmation modal
        this.isDeleteModalOpen = false;
    }

    removePropertyFromList(propertyId) {
        // Remove the deleted property from the property list
        this.propertyItems = this.propertyItems.filter(property => property.Id !== propertyId);
    }

    updatePropertyList(updatedProperty) {
        // Update the property list with the edited property
        this.propertyItems = this.propertyItems.map(property =>
            property.Id === updatedProperty.Id ? { ...updatedProperty } : property
        );
        this.publishUpdatedProperties();
    }

    publishUpdatedProperties() {
        // Publish the updated property list to the message channel
        const message = {
            properties: this.propertyItems
        };
        publish(this.messageContext, PROPERTY_MESSAGE_CHANNEL, message);
    }

    showToast(title, message, variant) {
        // Show a toast notification
        const event = new ShowToastEvent({
            title,
            message,
            variant,
        });
        this.dispatchEvent(event);
    }
}
