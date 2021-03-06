'use strict';

const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string()
        .required()
        .lowercase()
        .trim()
        .min(3)
        .max(14),
    email: Joi.string()
        .required()
        .lowercase()
        .email({
            minDomainSegments: 2
        }),
    password: Joi.string()
        .required(),
    password_confirmation: Joi.ref('password')
});

module.exports = {
    validateRegisterSchema: async (req, res, next) => {
        try {
            const value = await registerSchema.validateAsync(req.body);
            req.validatedBody = value;
            return next();
        } catch (err) {
            return next(err);
        }
    }
};
