window._genesys = {
  widgets: {
    main: {
      themes: {
        toronto_hydro: "th-theme",
      },
      theme: "toronto_hydro",
      preload: ["webchat"],
    },
    webchat: {
      autoInvite: {
        enabled: true,
        timeToInviteSeconds: 10,
        inviteTimeoutSeconds: 30,
      },
      emojis: true,
      transport: {
        type: "purecloud-v2-sockets",
        dataURL: "https://api.mypurecloud.com",
        deploymentKey: "b9fac73f-d7ab-49db-a773-91728d3b591e",
        orgGuid: "ede654f5-46d5-495f-82e2-07b4cbba1d63",
        interactionData: {
          routing: {
            targetType: "QUEUE",
            targetAddress: "Toronto Hydro Chat",
            priority: 2,
          },
        },
      },
     // userData: {
     //   addressStreet: "5915 Airport Rd. Suite 610",
     //   addressCity: "Mississauga",
     //   addressPostalCode: "L4V 1T1",
     //   addressState: "ON",
     //   phoneNumber: "855-782-7835",
    //    phoneType: "Cell",
     //   customerId: "59606",
     // },
      chatButton: {
        enabled: true,
        template: "<div class='start-button'></div>",
        effect: "fade",
        openDelay: 1000,
        effectDuration: 300,
        hideDuringInvite: true,
      },
      disclaimer: {
        enabled: true,
        template:
          "<p><strong>If people or property are at risk, always call 911 first.</strong></p><p>For electrical emergencies, such as downed lines, call us immediately at 416-542-8000 and press 1.</p><p>If you're unable to reach us call 911 for police or fire.</p>",
        fullScreen: true,
      },
    },
  },
};
