  graphql(UpdateUserNotificationSettings, {
        options: {
          update: (
            dataProxy,
            {data: {AddOrUpdateUserNotificationSettings}}
          ) => {
            const query = getNotificationsSettings;
            const data = dataProxy.readQuery({query});
            data.getNotificationsSettings = AddOrUpdateUserNotificationSettings;
            dataProxy.writeQuery({query, data});
          },
        },
        props: props => ({
          onSettingsUpdate: obj => {
            props.notificationSettingsData = obj;
            props.mutate({
              variables: obj,
              optimisticResponse: () => ({
                AddOrUpdateUserNotificationSettings: {
                  ...obj,
                  __typename: 'UserNotificationSettings',
                },
              }),
            });
          },
        }),
      }),