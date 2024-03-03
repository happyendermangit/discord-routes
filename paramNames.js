let paramNames = {
        ACTIVE_CHANNELS: [
          ":guild_id"
        ],
        ACTIVITY_CHANNEL_LAUNCH: [
          ":voice_channel_id",
          ":application_id"
        ],
        ACTIVITY_TEST_MODE: [
          ":application_id"
        ],
        ACTIVITY_UPLOAD_ATTACHMENT: [
          ":application_id"
        ],
        ADD_SAFETY_WARNING: [
          ":channel_id"
        ],
        APPLICATION_ACTIVITY_STATISTICS: [
            ":application_id"
        ],
        APPLICATION_ICON: [
          ":application_id",
          ":filename"
        ],
        APPLICATION_RPC: [
          ":application_id"
        ],
        APPLICATION_ASSETS: [
          ":application_id"
        ],
        APPLICATION_EXTERNAL_ASSETS: [
          ":application_id"
        ],
        APPLICATION_LIVE_BUILD: [
          ":application_id",
          ":branch_id"
        ],
        APPLICATION_BUILD_SIZE: [
          ":application_id",
          ":branche_id",
          ":build_id"
        ],
        APPLICATION_PUBLIC: [
          ":application_id"
        ],
        APPLICATION_BRANCH_LIST: [
          ":application_id"
        ],
        APPLICATION_SKUS: [
          ":application_id"
        ],
        APPLICATION_TICKET: [
          ":application_id"
        ],
        APPLICATION_ASSET: [
          ":application_id",
          ":file_name",
          ":file_extension"
        ],
        APPLICATION_STORAGE: [
          ":application_id",
          ":branche_id"
        ],
        APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS: [
          ":application_id",
          ":guild_id",
          ":command_id"
        ],
        APPLICATION_OWNER_TRANSFER: [
          ":application_id"
        ],
        APPLICATION_COMMANDS_SEARCH: [
          ":channel_id"
        ],
        APPLICATION_COMMAND_INDEX_CHANNEL: [
          ":channel_id"
        ],
        APPLICATION_COMMAND_INDEX_GUILD: [
          ":guild_id"
        ],
        APPLICATION_DIRECTORY_APPLICATION: [
          ":application_id"
        ],
        APPLICATION_DIRECTORY_EMBED_APPLICATION: [
          ":application_id"
        ],
        APPLICATION_DIRECTORY_SIMILAR: [
          ":application_id"
        ],
        APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE: [
          ":application_id",
          ":file_name",
          ":file_extension"
        ],
        APPLICATION_SUBSCRIPTION_GROUP_LISTING: [
          ":application_id",
          ":sku_id"
        ],
        APPLIED_GUILD_BOOSTS_FOR_GUILD: [
          ":guild_id"
        ],
        AVATAR: [
          ":user_id",
          ":avatar_hash",
          ":file_extension"
        ],
        AVATAR_DECORATION_PRESETS: [
          ":file_name",
          ":file_extension"
        ],
        BADGE_ICON: [
          ":badge_icon_filename"
        ],
        BILLING_PAYMENT_SOURCE: [
          ":payment_sourceid"
        ],
        BILLING_PAYMENT: [
          ":payment_id"
        ],
        BILLING_PAYMENTS_VOID: [
          ":payment_id"
        ],
        BILLING_PAYMENTS_REFUND: [
          ":payment_id"
        ],
        BILLING_STRIPE_PAYMENT_INTENTS: [
          ":payment_id"
        ],
        BILLING_STRIPE_PAYMENT_INTENTS_VIA_ID: [
          ":payment_id"
        ],
        BILLING_STANDALONE_CHECKOUT_PAGE: [
          ":plan_id",
          ":is_gift",
          ":load_id"
        ],
        BILLING_STANDALONE_CHECKOUT_LOGIN_HANDOFF: [
          ":handoff_key",
          ":handoff_token",
          ":destination"
        ],
        BILLING_POPUP_BRIDGE: [
          ":payment_source_type"
        ],
        BILLING_POPUP_BRIDGE_CALLBACK: [
          ":payment_source_type"
        ],
        BILLING_APPLE_SUBSCRIPTION: [
          ":subscription_id"
        ],
        BILLING_SUBSCRIPTION: [
          ":subscription_id"
        ],
        BILLING_SUBSCRIPTION_PREVIEW: [
          ":subscription_id"
        ],
        BILLING_SUBSCRIPTION_INVOICE: [
          ":subscription_id"
        ],
        BILLING_INVOICE_MANUAL_PAYMENT: [
          ":subscription_id",
          ":invoice_id" // Might be wrong!!!!
        ],
        BULK_GUILD_BAN: [
          ":guild_id"
        ],
        CALL: [
          ":channel_id"
        ],
        CALL_RING: [
          ":channel_id"
        ],
        CALL_STOP_RINGING: [
          ":channel_id"
        ],
        CALL_STOP_RINGING: [
          ":channel_id"
        ],
        CHANNEL: [
          ":channel_id"
        ],
        CHANNEL_RECIPIENTS: [
          ":channel_id"
        ],
        CHANNEL_RECIPIENT: [
          ":channel_id",
          ":recipient_id"
        ],
        CHANNEL_RECIPIENT_CONSENT: [
          ":channel_id"
        ],
        CHANNEL_ICON: [
          ":channel_id",
          ":file_name"
        ],
        CHANNEL_CONVERT: [
          ":channel_id"
        ],
        CHANNEL_ACK: [
          ":channel_id"
        ],
        CHANNEL_STORE_LISTING: [
          ":channel_id"
        ],
        CHANNEL_ENTITLEMENT_GRANT: [
          ":channel_id"
        ],
        CHANNEL_FOLLOWERS: [
          ":channel_id"
        ],
        CHANNEL_FOLLOWER_STATS: [
          ":channel_id"
        ],
        CHANNEL_FOLLOWER_MESSAGE_STATS: [
          ":channel_id"
        ],
        CHANNEL_INTEGRATIONS: [
          ":channel_id"
        ],
        CHANNEL_INTEGRATION: [
          ":channel_id",
          ":intergration_id"
        ],
        CHANNEL_SAFETY_WARNINGS_ACK: [
          ":channel_id"
        ],
        CHANNEL_WEBHOOKS: [
          ":channel_id"
        ],
        CHANNEL_THREADS: [
          ":channel_id"
        ],
        CHANNEL_MESSAGE_THREADS: [
          ":channel_id",
          ":message_id"
        ],
        CHANNEL_HIGHLIGHTS: [
          ":guild_id"
        ],
        CLAIM_OUTBOUND_PROMOTION_CODE: [
          ":outbound_promotion_id" // might be wrong
        ],
        COLLECTIBLES_PRODUCTS: [
          ":collectible_category_sku_id"
        ],
        CONNECT_REQUEST: [
          ":id" // might be wrong!!!
        ],
        CONNECTION: [
          ":type",
          ":id"
        ],
        CONNECTION_REFRESH: [
          ":type",
          ":id"
        ],
        CONNECTION_ACCESS_TOKEN: [
          ":type",
          ":id"
        ],
        CONNECTIONS_AUTHORIZE: [
          ":type"
        ],
        CONNECTIONS_AUTHORIZE_CONTINUATION: [
          ":type"
        ],
        CONNECTIONS_AUTHORIZE_LINK: [
          ":type",
          ":two_way_link_type"
        ],
        CONNECTIONS_AUTHORIZE_LINK_DEVICE: [
          ":type",
          ":two_way_user_code"
        ],
        CONNECTIONS_CALLBACK: [
          ":type",
          ":pin_code" // might be wrong!!!
        ],
        CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK: [
          ":type"
        ],
        CONSOLES_DEVICES: [
          ":platform"
        ],
        CONSOLES_DEVICES_COMMANDS: [
          ":platform",
          ":device_id" // might be wrong!!!
        ],
        CONSOLES_DEVICES_COMMAND: [
          ":platform",
          ":device_id",
          ":command_id" // might be wrong!!!
        ],
        CREATE_REFERRAL_PREVIEW: [
          ":referal_id" // might be wrong!!!
        ],
        CREATE_REFERRAL: [
          ":referal_id" // might be wrong!!!
        ],
        WEBHOOK: [
          ":webhook_id"
        ],
        WEBHOOK_INTEGRATION: [
          ":webhook_id",
          ":webhook_token"
        ],
        VOICE_CHANNEL_NOTIFICATIONS: [
          ":channel_id"
        ],
        VOICE_CHANNEL_EFFECTS: [
          ":channel_id"
        ],
        VIDEO_FILTER_ASSET: [
          ":video_filter_id"
        ],
        VIDEO_FILTER_ASSET_LAST_USED: [
          ":video_filter_id"
        ],
        VIDEO_FILTER_ASSET_STORAGE: [
          ":user_id",
          ":video_filter_id",
          ":file_name",
          ":file_extension"
        ],
        USERNAME_LOOKUP: [
          ":username"
        ],
        UNRESOLVED_GUILD_TEMPLATE: [
          ":template_id"
        ],
        TYPING: [
          ":channel_id"
        ],
        TOP_EMOJIS_FOR_GUILD: [
          ":guild_id"
        ],
        THREAD_MEMBER: [
          ":channel_id",
          ":thread_id"
        ],
        THREAD_MEMBER_SETTINGS: [
          ":channel_id"
        ],
        THREAD_SEARCH: [
          ":channel_id"
        ],
        SUBSCRIPTION_PLAN_GROUP_LISTING: [
          ":plan_id"
        ],
        SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING: [
          ":plan_id"
        ],
        STREAM_PREVIEW: [
          ":stream_id" // might be wrong!!!
        ],
        STREAM_NOTIFY: [
          ":stream_id" // might be wrong!!!
        ],
        STREAM: [
          ":stream_id" // might be wrong!!!
        ],
        STAGE_REPORT: [
          ":channel_id",
          ":message_id "
        ],
        SOUNDBOARD_SOUND: [
          ":sound_id"
        ],
        SET_GUILD_MEMBER: [
          ":guild_id"
        ],
        SEND_SOUNDBOARD_SOUND: [
          ":channel_id"
        ],
        SEND_GAMING_STATS: [
          ":channel_id" // might be wrong!!
        ],
        SAFETY_HUB_REQUEST_REVIEW: [
          ":id"
        ],
        SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW: [
          ":id"
        ],
        ROLE_ICON: [
          ":role_id",
          ":icon_file_name"
        ],
        RESOURCE_CHANNEL: [
          ":guild_id",
          ":channel_id"
        ],
        REMOVE_REACTIONS: [
          ":channel_id",
          ":message_id"
        ],
        REMOVE_EMOJI_REACTIONS: [
          ":channel_id",
          ":message_id",
          ":emoji"
        ],
        REGIONS: [
          ":guild_id"
        ],
        REFERRAL_OFFER_ID_RESOLVE: [
          ":referal_id" // might be wrong!!!
        ],
        REACTIONS: [
          ":channel_id",
          ":message_id",
          ":emoji"
        ],
        REACTION: [
          ":channel_id",
          ":message_id",
          ":emoji",
          ":user_id"
        ],
        REACTION_WITH_TYPE: [
          ":channel_id",
          ":message_id",
          ":emoji",
          ":user_id",
          ":type"
        ],
        PRIVATE_CHANNEL_INTEGRATION_CONSENT: [
          ":channel_id"
        ],
        POLL_ANSWERS: [
          ":channel_id",
          ":poll_id"
        ],
        POLL_EXPIRE: [
          ":channel_id",
          ":poll_id"
        ], 
        POLL_ANSWER_VOTERS: [
          ":channel_id",
          ":poll_id",
          ":choice" // might be wrong!!!
        ],
        PINS_ACK: [
          ":channel_id"
        ],
        PINS: [
          ":channel_id"
        ],
        PIN: [
          ":channel_id",
          ":pin_id" // might be wrong!!!
        ],
        PAYMENT_PAYOUT_GROUPS: [
          ":application_id"
        ],
        PARTNER_REQUIREMENTS: [
          ":guild_id" // might be wrong!!!
        ],
        PARTNER_PROMOTIONS: [
          ":guild_id" // might be wrong!!!
        ],
        OWNED_APPLICATION_BRANCHES: [
          ":application_id"
        ],
        OAUTH2_TOKEN: [
          ":token" // might be wrong!!!
        ],
        NOTIFICATION_SNAPSHOT: [
          ":snapshot_id"
        ],
        NOTIF_CENTER_ITEMS: [
          ":id"
        ],
        NOTIF_CENTER_ITEMS_ACK: [
          ":id"
        ],
        NOTE: [
          ":user_id"
        ],
        NEW_MEMBER_ACTION: [
          ":guild_id",
          ":action" // might be wrong!!!
        ],
        MY_ARCHIVED_THREADS: [
          ":channel_id"
        ],
        MESSAGES: [
          ":channel_id"
        ],
        MESSAGES_GREET: [
          ":channel_id"
        ],
        MENTIONS_MESSAGE_ID: [
          ":message_id"
        ],
        MEMBER_SAFETY_SUPPLEMENTAL: [
          ":guild_id"
        ],
        MEDIA_POST_RESHARE_GET_PREVIEW: [
          ":channel_id"
        ],
        LOBBY: [
          ":lobby_id"
        ],
        LOBBY_MEMBER: [
          ":lobby_id",
          ":member_id"
        ],
        LOBBY_SEND: [
          ":lobby_id"
        ],
        LIBRARY_APPLICATION_BRANCH: [
          ":application_id",
          ":branch_id"
        ],
        LIBRARY_APPLICATION_DELETE: [
          ":application_id"
        ],
        LIBRARY_APPLICATION_INSTALLED: [
          ":application_id",
          ":branch_id" // might be wrong!!!
        ],
        JOIN_ADMIN_SERVER: [
          ":guild_id"
        ],
        INVITE: [
          ":invite_code"
        ],
        INTEGRATION_JOIN: [
          ":integration_id"
        ],
        INTEGRATION_SEARCH: [
          ":integration_id"
        ],
        INSTANT_INVITES: [
          ":channel_id"
        ],
        GIFT_CODE_RESOLVE: [
          ":gift_code"
        ],
        GIFT_CODE_REDEEM: [
          ":gift_code"
        ],
        GAME_INVITE: [
          ":invite_id"
        ],
        FORUM_POSTS: [
          ":channel_id"
        ],
        FORUM_TAGS: [
          ":channel_id"
        ],
        FORUM_TAG: [
          ":channel_id",
          ":tag_id"
        ],
        FORCE_SEND_PROMPT: [
          ":channel_id" // might be wrong!!!
        ],
        FAMILY_CENTER_TEEN_ACTIVITY: [
          ":teen_user_id"
        ],
        FAMILY_CENTER_FETCH_TEEN_USER: [
          ":teen_user_id"
        ],
        EXPLICIT_MEDIA_SCAN_MESSAGES: [
          ":channel_id"
        ],
        ENTITLEMENTS_FOR_APPLICATION: [
          ":application_id"
        ],
        ENTITLEMENT_TICKET: [
          ":application_id"
        ],
        EMOJI: [
          ":emoji_id",
          ":file_extension"
        ],
        EMOJI_GUILD_DATA: [
          ":emoji_id"
        ],
        EMOJI_SOURCE_DATA: [
          ":emoji_id"
        ],
        DM_CHANNEL: [
          ":channel_id"
        ],
        CUSTOM_CALL_SOUNDS: [
          ":channel_id"
        ],
        DROPS_HEARTBEAT: [
          ":quest_id"
        ],
        DROPS_PROGRESS: [
          ":quest_id"
        ],
        CREATOR_MONETIZATION_ENABLE_REQUESTS: [
          ":guild_id"
        ],
        CREATOR_MONETIZATION_ELIGIBILITY: [
          ":guild_id"
        ],
        CREATOR_MONETIZATION_ACCEPT_TERMS_V2: [
          ":guild_id"
        ],
        CREATOR_MONETIZATION_RESTRICTIONS: [
          ":guild_id"
        ],
        CREATOR_MONETIZATION_MARKETING_ONBOARDING: [
          ":guild_id"
        ],
        CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD: [
          ":guild_id"
        ],
        CREATOR_MONETIZATION_ACCEPT_NEW_TERMS: [
          ":guild_id"
        ],
        CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED: [
          ":guild_id"
        ],
        CREATOR_MONETIZATION_REMOVE_MONETIZATION: [
          ":guild_id"
        ],
        DIRECTORY_CHANNEL_ENTRIES: [
          ":channel_id"
        ],
        DIRECTORY_CHANNEL_ENTRY: [
          ":channel_id",
          ":entry_id"
        ],
        DIRECTORY_ENTRIES_SEARCH: [
          ":channel_id"
        ],
        DIRECTORY_CHANNEL_CATEGORY_COUNTS: [
          ":channel_id"
        ],
        DIRECTORY_CHANNEL_LIST_BY_ID: [
          ":channel_id"
        ],
        DIRECTORY_ENTRIES_BROADCAST_INFO: [
          ":channel_id"
        ],
        MESSAGE: [
          ":channel_id",
          ":message_id"
        ],
        MESSAGE_ACK: [
          ":channel_id",
          ":message_id"
        ],
        MESSAGE_CREATE_ATTACHMENT_UPLOAD: [
          ":channel_id"
        ],
        MESSAGE_DELETE_UPLOAD: [
          ":upload_id" // might be wrong!!!
        ],
        MESSAGE_CROSSPOST: [
          ":channel_id",
          ":message_id"
        ],
        MESSAGE_INTERACTION_DATA:[
          ":channel_id",
          ":message_id"
        ],
        STICKER_PACK: [
          ":pack_id"
        ],
        STICKER_ASSET: [
          ":sticker_id",
          ":file_extension"
        ],
        STICKER: [
          ":sticker_id"
        ],
        STICKER_GUILD_DATA: [
          ":sticker_id"
        ],
        UPDATE_VOICE_CHANNEL_STATUS: [
          ":channel_id"
        ],
        UPDATE_VOICE_CHANNEL_BACKGROUND: [
          ":channel_id"
        ],
        UPDATE_VOICE_STATE: [
          ":guild_id",
          ":user_id"
        ],
        UPDATE_GAMING_STATS: [
          ":channel_id",
          ":message_id" // might be wrong!!!
        ],
        USER: [
          ":user_id"
        ],
        USER_RELATIONSHIPS: [
          ":user_id"
        ],
        USER_RELATIONSHIP: [
          ":user_id"
        ],
        USER_PROFILE: [
          ":user_id"
        ],
        USER_BANNER: [
          ":user_id",
          ":banner_hash",
          ":file_extension"
        ],
        USER_GUILD_SETTINGS: [
          ":user_id"
        ],
        USER_GUILD_BOOST_SLOT_CANCEL: [
          ":slot_id" // might be wrong!!!
        ],
        USER_GUILD_BOOST_SLOT_UNCANCEL: [
          ":slot_id" // might be wrong!!!
        ],
        USER_ACHIEVEMENTS: [
          ":application_id"
        ],
        USER_ACHIEVEMENTS_FOR_USER: [
          ":user_id",
          ":application_id",
          ":achievment_id" // might be wrong!!
        ],
        USER_GIFT_CODE_REVOKE: [
          ":gift_code"
        ],
        USER_TRIAL_OFFER_ACKNOWLEDGED: [
          ":trial_offer_id"
        ],
        USER_SURVEY_SEEN: [
          ":survey_id"
        ],
        USER_GUILD_EVENT: [
          ":guild_id",
          ":event_id",
          ":type" // i'm unsure about this one!!!
        ],
        SEARCH_GUILD: [
          ":guild_id"
        ],
        SEARCH_TABS_GUILD: [
          ":guild_id"
        ],
        SEARCH_CHANNEL: [
          ":channel_id"
        ],
        SEARCH_TABS_CHANNEL: [
          ":channel_id"
        ]
      }
