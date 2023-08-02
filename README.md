This App was created as part of our final project in collaborationg with Judy from Tech for Better.
Rent Shield is a two sided app where landlords and renters can log in and either search or upload a property. The form was designed by the product owner to ensure landlords would upload recent and accurate data.

## Contributing

### Dependencies

After cloning the repository, install all dependencies with `npm install`. You can view the project in development in your local server by running:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

| 🍋 Tech Stack 🍉    |
| ------------------- |
| Typescript          |
| Supabase            |
| Tailwind + flowbite |
| Next.js (13)        |
| Cypress             |
| Jest                |

## Deployment

Rent Shied is deployed on `Vercel`. The Main branch is continuously deployed and can be visited on [this link](https://rent-shield.vercel.app/).

All Pull Requests must meet the following requirements before being merged into the main branch:

- Two collaborating developers have reviewed and approved the request
- The full test suite has been run and passed (this is done automatically when committing any code)
- The pull request includes running and passing tests for any new functionalities in the code (every developer is responsible for testing their code)

## Planning

Development of Rent Shield is tracked using github projects. [This project board](https://github.com/orgs/fac27/projects/36/views/) is updated regularly and informs the roadmap for new features and code base improvements.

### MVP

The development of Rent Shield is currently in early stages and is guided towards fullfiling the following user stories:

1. As a user I want to search properties by location, budget, number of bedrooms, and property type
2. As a renter I want to login so that I can save/favourite properties
3. As a landlord I want to be able to login and upload my property so that renters can see it

<img width="1057" alt="Screenshot 2023-07-26 at 16 46 40" src="https://github.com/fac27/rent-shield/assets/114600712/c6488095-75bd-49c0-baab-f8deca27acca">
