export default class ContactComponent {

    get title() {
        return $('.modal-title');
    }

    get contactEmailField() {
        return $('#recipient-email');
    }

    get contactNameField() {
        return $('#recipient-name');
    }

    get contactMessageField() {
        return $('#message-text');
    }

    get contactEmailTitle() {
        return $('label[for="recipient-name"]');
    }

    get contactNameTitle() {
        return $('//label[@for="recipient-name"]/following::label[@for="recipient-name"]');
    }

    get contactMessageTitle() {
        return $('label[for="message-text"]');
    }

    get closeButton() {
        return $('//div[div[h5[text()="New message"]]]//button[@class="btn btn-secondary"]');
    }

    get sendMessageButton() {
        return $('//div[div[h5[text()="New message"]]]//button[@class="btn btn-primary"]');
    }

    get xCloseButton() {
        return $('//div[div[h5[text()="New message"]]]//button[@aria-label="Close"]');
    }

    fieldTitle(field) {
        switch (field) {
            case "Contact Email":
                return this.contactEmailTitle.getText();
            case "Contact Name":
                return this.contactNameTitle.getText();
            case "Message":
                return this.contactMessageTitle.getText();
            default:
                throw Error(`"${field}" is not a valid field title.`)
        }
    }

    fieldIsDisplayed(field) {
        switch (field) {
            case "Contact Email":
                return this.contactEmailField.isDisplayed();
            case "Contact Name":
                return this.contactNameField.isDisplayed();
            case "Message":
                return this.contactMessageField.isDisplayed();
            default:
                throw Error(`"${field}" is not a valid field title.`)
        }
    }
}