
import Joi from 'joi';

class UserAccountModel {
    static get schema() {

        return {
            id: Joi.number(),
            name: Joi.string().trim().description('Name'),
            lastName: Joi.string().trim().description('Last name'),
            email: Joi.string().trim().description('Email'),
            creationDate: Joi.date().description('Creation Date'),
            modificationDate: Joi.date().description('Modification Date'),
        };
    };
}

module.exports = UserAccountModel;
