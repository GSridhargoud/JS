const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {
    const { vendormaster } = this.entities;

    this.before("CREATE", vendormaster, req => {
        const { vm_code, vm_firstname, vm_lastname, vm_gstno, vm_person } = req.data;

        const regex = /^[A-Z]{2}[0-9]{2}$/;

        const regex1 = /^[A-Z][a-zA-Z]{2,9}$/;

        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/

        if (!gstRegex.test(vm_gstno)) {
            req.error(400, 'Invalid GST Number format')
        }

        if (!regex.test(vm_code)) {
            req.error(400, 'vm_code must be exactly 2 capital letters followed by 2 digits (e.g. AS12)');
            return;
        }

        if (!regex1.test(vm_firstname)) {
            req.error(400, 'First letter should be Captial and should only letters in the first name ');
            return;
        }
        if (!regex1.test(vm_lastname)) {
            req.error(400, 'First letter should be Captial and should only letters in the lastname');
            return;
        }
        if (!regex1.test(vm_person)) {
            req.error(400, 'First letter should be Captial and should only letters in the Contact person');
            return;
        }

    })

});
