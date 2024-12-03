export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: ``
    },
    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-600">Software Development Proposal</h1>
            <p className="text-lg text-gray-600 mt-2">For [Client Name]</p>
        </header>

        <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Executive Summary</h2>
            <p className="text-lg text-gray-700">
                This proposal outlines the development of a custom software solution
                tailored to [Client Name]'s needs. The goal is to create an efficient,
                scalable, and user-friendly system that addresses the challenges faced by
                your business, while ensuring growth and success in the digital era.
            </p>
        </section>

        <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Project Objectives</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>Understand client requirements and propose the best solution.</li>
                <li>Deliver a scalable, secure, and high-performance application.</li>
                <li>Ensure a user-friendly interface and smooth UX/UI design.</li>
                <li>Integrate relevant tools and technologies for business optimization.</li>
            </ul>
        </section>

        <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Project Timeline</h2>
            <p className="text-lg text-gray-700 mb-4">
                The estimated timeline for the project is as follows:
            </p>
            <table className="table-auto w-full border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-blue-100 border border-gray-300 text-left text-lg text-gray-700">Phase</th>
                        <th className="px-4 py-2 bg-blue-100 border border-gray-300 text-left text-lg text-gray-700">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Requirements Gathering</td>
                        <td className="px-4 py-2 border border-gray-300">2 Weeks</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Design and Prototyping</td>
                        <td className="px-4 py-2 border border-gray-300">4 Weeks</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Development</td>
                        <td className="px-4 py-2 border border-gray-300">8 Weeks</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Testing and QA</td>
                        <td className="px-4 py-2 border border-gray-300">3 Weeks</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Deployment</td>
                        <td className="px-4 py-2 border border-gray-300">1 Week</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Cost and Budget</h2>
            <p className="text-lg text-gray-700 mb-4">
                The total cost of the project is estimated to be $[Amount], broken down as
                follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>Project Planning: $[Amount]</li>
                <li>Development: $[Amount]</li>
                <li>Design and UI/UX: $[Amount]</li>
                <li>Testing and Quality Assurance: $[Amount]</li>
                <li>Deployment and Maintenance: $[Amount]</li>
            </ul>
        </section>

        <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Conclusion</h2>
            <p className="text-lg text-gray-700">
                This proposal offers a comprehensive solution to meet your software
                development needs. By leveraging the latest technologies and best
                practices, we aim to deliver a product that will enhance your business
                efficiency and help you achieve your strategic goals.
            </p>
        </section>

        <footer className="text-center text-gray-600 mt-16">
            <p>Proposal prepared by [Your Company Name]</p>
            <p>Contact us at [Your Email] | [Your Phone Number]</p>
        </footer>
        `
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
        <header className="mb-8">
            <h1 className="text-4xl font-semibold text-center text-blue-600">
                Project Proposal
            </h1>
            <p className="text-center text-lg mt-2 text-gray-500">
                A comprehensive proposal for <strong>Project Name</strong>
            </p>
        </header>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Introduction</h2>
            <p className="text-gray-700">
                This project proposal outlines the scope, objectives, and plan of action for <strong>Project Name</strong>. The goal of this project is to <strong>briefly describe project aim</strong> and deliver key outcomes such as <strong>desired result</strong>.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Objectives</h2>
            <ul className="list-disc pl-6 text-gray-700">
                <li>Objective 1: Describe the first objective of the project.</li>
                <li>Objective 2: Outline the second objective.</li>
                <li>Objective 3: Detail the third objective.</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Scope</h2>
            <p className="text-gray-700">
                This project will cover the following key areas:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
                <li>Scope Item 1</li>
                <li>Scope Item 2</li>
                <li>Scope Item 3</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Timeline</h2>
            <p className="text-gray-700">
                The project will be completed within <strong>time duration</strong>, with the following milestones:
            </p>
            <ul className="list-decimal pl-6 text-gray-700">
                <li>Milestone 1: Brief description - Date</li>
                <li>Milestone 2: Brief description - Date</li>
                <li>Milestone 3: Brief description - Date</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Budget</h2>
            <p className="text-gray-700">
                The estimated budget for this project is $<strong>Amount</strong>. The budget breakdown is as follows:
            </p>
            <ul className="list-decimal pl-6 text-gray-700">
                <li>Expense 1: Amount</li>
                <li>Expense 2: Amount</li>
                <li>Expense 3: Amount</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Conclusion</h2>
            <p className="text-gray-700">
                This proposal outlines the key aspects of the <strong>Project Name</strong>, and we believe that with the outlined objectives, scope, and timeline, the project will be a success. We look forward to working on this project and achieving the desired results.
            </p>
        </section>
        `
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
        <header className="mb-12">
            <h1 className="text-4xl font-semibold text-center text-blue-600">
                Business Letter
            </h1>
        </header>

        <div className="mb-6">
            <h2>Sender Information</h2>
            <p><strong>Your Company Name</strong></p>
            <p>Your Address</p>
            <p>City, State, Zip Code</p>
            <p>Email: your.email@example.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>

        <div className="mb-6">
            <p>Date: ${new Date().toLocaleDateString()}</p>
        </div>

        <div className="mb-6">
            <h2>Recipient Information</h2>
            <p><strong>Recipient's Name</strong></p>
            <p>Company Name</p>
            <p>Company Address</p>
            <p>City, State, Zip Code</p>
        </div>

        <div className="mb-6">
            <h3>Subject: Your Subject Here</h3>
        </div>

        <div className="mb-6">
            <h2>Mail Body</h2>
            <p>Dear [Recipient's Name],</p>
            <p>Your letter body goes here. This is where you can write the main content of your letter, explaining your purpose and any details necessary.</p>
            <p>Thank you for your attention to this matter.</p>
        </div>

        <footer className="mb-6">
            <h2>Signature</h2>
            <p>Sincerely,</p>
            <p>Your Name</p>
        </footer>
        `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
        <header className="text-center">
            <h1>John Doe</h1>
            <p className="text-xl text-gray-500">Software Engineer</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="mailto:john.doe@example.com" className="text-blue-500">Email</a>
                <a href="https://www.linkedin.com/in/johndoe" className="text-blue-500">LinkedIn</a>
                <a href="https://github.com/johndoe" className="text-blue-500">GitHub</a>
            </div>
        </header>

        <section>
            <h1>Experience</h1>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-sm text-gray-500">Company Name | January 2020 - Present</p>
                <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Developed and maintained web applications using React.js and Node.js.</li>
                    <li>Collaborated with cross-functional teams to improve user experience.</li>
                </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-sm text-gray-500">Another Company | June 2018 - December 2019</p>
                <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Built responsive user interfaces with HTML, CSS, and JavaScript.</li>
                    <li>Worked with stakeholders to define project requirements and timelines.</li>
                </ul>
            </div>
        </section>

        <section>
            <h1>Education</h1>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-sm text-gray-500">University of ABC | 2014 - 2018</p>
            </div>
        </section>

        <section>
            <h1>Skills</h1>
            <ul className="list-inside text-gray-600">
                <li>React, JavaScript, Node.js</li>
                <li>HTML, CSS, Tailwind CSS</li>
                <li>Git, GitHub</li>
                <li>Database Management (MongoDB, MySQL)</li>
            </ul>
        </section>
        `
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
        <header className="text-gray-800">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Sender Information</h1>
                <p className="text-lg text-gray-500"><strong>John Doe</strong></p>
                <p className="text-lg text-gray-500">123 Main St, City, Country</p>
                <p className="text-lg text-gray-500">Email: johndoe@example.com | Phone: +1234567890</p>
            </div>
            <hr className="my-4 border-gray-300" />
        </header>

        <section>
            <h1 className="text-3xl font-bold">Letter Body</h1>
            <p className="text-gray-800">
                Dear [Hiring Manager's Name],
            </p>
            <p className="text-gray-800">
                I am writing to express my interest in the [Job Title] position at [Company Name]. With my background in [Your Field/Skill], I am confident that I can contribute to the success of your team.
            </p>
        </section>

        <section>
            <p className="text-gray-800">
                As a [Your Job Title/Previous Experience], I have developed expertise in [mention key skills or achievements]. My experience in [specific task or project] has equipped me with the skills necessary to [mention how you can contribute to the company].
            </p>
            <p className="text-gray-800 mt-4">
                I am particularly drawn to this opportunity at [Company Name] because of [specific reason related to the company or position]. I believe my background in [skill/field] and passion for [related area] will make me a valuable asset to your team.
            </p>
        </section>

        <section>
            <p className="text-gray-800 mt-4">
                Thank you for considering my application. I would welcome the opportunity to discuss my qualifications further. I am looking forward to the possibility of contributing to your team at [Company Name].
            </p>
        </section>

        <section>
            <h2>Regards</h2>
            <p className="text-gray-800 mt-6">
                Sincerely,
            </p>
            <p className="text-gray-800 mt-2">
                John Doe
            </p>
        </section>
        `
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
        <header className="flex justify-between items-center mb-8">
            <h1>Letter Address</h1>
            <div className="text-xl font-bold text-gray-800">
                <span>Company Name</span>
            </div>
            <div className="text-sm text-gray-600">
                <span>Date: December 3, 2024</span>
            </div>
        </header>

        <div className="mb-8">
            <h1>Letter Body</h1>
            <p className="text-gray-800 mb-4">
                Dear [Recipient Name],
            </p>
            <p className="text-gray-800 mb-4">
                I hope this letter finds you well. I am writing to inform you of [the purpose of the letter, e.g., an update, request, etc.]. Please feel free to contact me if you have any questions or require further clarification.
            </p>
            <p className="text-gray-800 mb-4">
                Thank you for your time and attention to this matter.
            </p>
            <h1>Regards</h1>
            <p className="text-gray-800">
                Sincerely,
            </p>
            <p className="text-gray-800 mt-4">
                [Your Name]
            </p>
            <p className="text-gray-800">
                [Your Position]
            </p>
        </div>

        <footer className="mt-8 text-sm text-center text-gray-600">
            <p>Address | Contact Number | Website</p>
        </footer>
        `
    },
];
