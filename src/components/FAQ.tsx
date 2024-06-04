import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
function FAQ() {
    useEffect(() => {
        Aos.init();
    }, []);
    const FAQ1 = [
        {
            question: "What is Carbon Credit ?",
            answer: "You earn credits for each project completed through your chosen service provider. Initially, you start with -1000 points, and as you contribute to environmental efforts, your score progresses toward the positive."
        },
        {
            question: "How do I track the impact of my contributions?",
            answer: "You need to take care for e.g if you engage in planting, you must diligently nurture the trees to ensure they grow large and contribute to the greenery"
        },
        {
            question: "What are the benefits of carbon compensation?",
            answer: "Firstly, you will contribute to saving the Earth, and students enrolled in the program will also receive a certificate of internship completion. "
        },


    ];
    const FAQ2 = [

        {
            question: "Do I receive a certificate for my contributions?",
            answer: "If the participant achieves the committed goal,then only will receive certificates acknowledging that they have done contributed/perform activity which impacts to the enviornment."
        },
        {

            question: "Can businesses also participate in carbon compensation?",
            answer: "Our participants are not limited to just students; every individual has a responsibility to contribute to environmental conservation."
        },
        {
            question: "What happens if I fail to deliver the promised offset?",
            answer: "If a participant fails to achieve the committed goal, they will not receive carbon credits. Additionally, in the unfortunate event of a natural disaster causing the loss of the offset, whether through planting trees, water conservation, animal welfare, e-waste management, soil preservation, or any other carbon reduction program, the previously awarded carbon credits will be revoked."
        },
    ];

    const [visibleFAQ, setVisibleFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setVisibleFAQ(visibleFAQ === index ? null : index);
    };

    return (
        <section className="bg-white" data-aos="fade-left">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-text">Frequently asked questions</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        {FAQ1.map((data, index) => (
                            <div className="mb-10" key={index}>
                                <h3
                                    className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-text cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                    {data.question}
                                </h3>
                                {visibleFAQ === index && <p className="text-gray-500 dark:text-gray-400">{data.answer}</p>}
                            </div>
                        ))}
                    </div>
                    <div>
                        {FAQ2.map((data, index) => (
                            <div className="mb-10" key={index + FAQ1.length}>
                                <h3
                                    className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-text cursor-pointer"
                                    onClick={() => toggleFAQ(index + FAQ1.length)}
                                >
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                    {data.question}
                                </h3>
                                {visibleFAQ === index + FAQ1.length && <p className="text-gray-500 dark:text-gray-400">{data.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
