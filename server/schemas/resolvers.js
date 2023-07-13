// add resolver logic
const { Profile } = require('../models');
const { errInAuth } = require('apollo-server-express');
const { signToken } = require('../../client/src/utils/auth');

const resolvers = {
    // add resolvers for the query and mutations
    Query: {
        profiles: async () => {
            return Profile.find();
        },
        profile: async (parent, { profileId }) => {
            return Profile.findOne({ _id: profileId});
        },
        me: async (parent, args, context) => {
            if (context.user){
                return Profile.findOne({ _id: context.user._id });
            };
            throw new errInAuth('Please log-in to attempt this action!');
        },
    },

    Mutation: {
       //add mutation for creating a new user
       addBio: async (parent, {username, bio}, context) => {
        if (context.user) {
            return Profile.findOneAndUpdate(
                {_id: username},
                {
                    $addToSet: {biography: bio},
                },
                {
                    new: true,
                    runValidators: true,
                },
            );
        }
        throw new errInAuth('Please log-in to attempt this action!');
       },
       deleteProfile: async (parent, args, context) => {
        if(context.user) {
            return Profile.findOneAndDelete({ _id: context.user._id});
        }
        throw new errInAuth('Please log-in to attempt this action!');
       },
       deleteBio: async (parent, {bio}, context) => {
        if(context.user) {
            return Profile.findOneAndDelete(
                { _id: context.user._id },
                { $pull: {biography, bio} },
                {new: true},
            );
        }
        throw new errInAuth('Please log-in to attempt this action!');
       },
    },
};

module.exports = resolvers;
