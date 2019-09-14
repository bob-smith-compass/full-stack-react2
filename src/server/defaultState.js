export const defaultState = {
    user: [{
        id: "U1",
        name: "Dev  "
    }],
    groups: [
        {
            name: "To Do",
            id: "G1",
            owner: "UI"
        },
        {
            name: "Group 2",
            id: "G2",
            owner: "UI"
        },
        {
            name: "Group 3",
            id: "G3",
            owner: "DevOps"
        },
    ],
    tasks: [
        {
            name: "To Do tests",
            id: "ID1",
            group: "G1",
            owner: "UI",
            isComplete: "false"
        }
    ],
    comments: [
        {
            owner: "o",
            id: "c1",
            task: "T1",
            content: "bla bla",
        }
    ]
}