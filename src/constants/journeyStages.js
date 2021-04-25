// export const STAGES = [
//   {
//     name: 'Preparing for Mars',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     status: 'passed',
//     offsetX: 110,
//     offsetY: 314,
//     points: [
//       {
//         offsetY: 434,
//         name: 'Crew for first Human Exploration Announced',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456',
//         predictions: [
//           {
//             id: 1000,
//             theme: 'Will NASA announce the crew members destined for the first Mars Mission by June 2023?'
//           },
//           {
//             id: 1001,
//             theme: 'Will a human set foot on Mars by June 2023?'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'Crossing the frontier',
//     status: 'future',
//     offsetX: 288,
//     offsetY: 248,
//     points: [
//       {
//         offsetY: 342,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       },
//       {
//         offsetY: 397,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       },
//       {
//         offsetY: 452,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       },
//       {
//         offsetY: 507,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       }
//     ]
//   },
//   {
//     name: 'Discovering the Red Planet',
//     status: 'future',
//     offsetX: 466,
//     offsetY: 182,
//     points: [
//       {
//         offsetY: 301,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       },
//       {
//         offsetY: 386,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       },
//       {
//         offsetY: 471,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       }
//     ]
//   },
//   {
//     name: 'New home',
//     status: 'future',
//     offsetX: 644,
//     offsetY: 116,
//     points: [
//       {
//         offsetY: 218,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       },
//       {
//         offsetY: 287,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       },
//       {
//         offsetY: 354,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       },
//       {
//         offsetY: 425,
//         name: 'Milestone name',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         state: 'Current',
//         dueTo: '1688862699',
//         predictors: '12456'
//
//       }
//     ]
//   }
// ]

const CATEGORIES_POSITION = [
  {
    offsetX: 110,
    offsetY: 314
  },
  {
    offsetX: 288,
    offsetY: 248
  },
  {
    offsetX: 466,
    offsetY: 182
  },
  {
    offsetX: 644,
    offsetY: 116
  }
]

const MILESTONES_POSITION = [
  {
    points: [
      { offsetY: 434 }
    ]
  },
  {
    points: [
      { offsetY: 342 },
      { offsetY: 397 },
      { offsetY: 452 },
      { offsetY: 507 }
    ]
  },
  {
    points: [
      { offsetY: 301 },
      { offsetY: 386 },
      { offsetY: 471 }
    ]
  },
  {
    points: [
      { offsetY: 218 },
      { offsetY: 287 },
      { offsetY: 354 },
      { offsetY: 425 }
    ]
  }
]

export {
  CATEGORIES_POSITION,
  MILESTONES_POSITION
}
