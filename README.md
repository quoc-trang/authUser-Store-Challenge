---
difficulty: 1
training: true
chapter: "Chapter 3: Advanced State Management"
tags: vue
---

# authUser Store Challenge

In this challenge, you should refactor the `useAuthUser` composable from a previous challenge to use Pinia instead.

## Requirements

1. The app should continue function just as before.
2. After login with a valid username and password, the page should redirect to the user's profile
3. The profile page should show the data corresponding to the user that logged in
4. The user global state should now be managed in a Pinia store instead of via a composable (including all of the functions used to get and set the state)
5. You can use either a [setup store](https://pinia.vuejs.org/core-concepts/#Setup-Stores) or an [options store](https://pinia.vuejs.org/core-concepts/#Option-Stores) (the choice is yours)

> 💡 HINT: The same 2 test users are available: `janedoe` and `johndoe`. They both have the password `vueisawesome`

![Screenshot of the solution](https://images.certificates.dev/csvd-training-code-challenge-9.gif)
