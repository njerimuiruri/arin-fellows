"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Users, Target, Eye, Globe, X, Linkedin, Mail, DollarSign, BookOpen } from "lucide-react"

const ARINFellowshipAbout = () => {
    const [selectedMember, setSelectedMember] = useState(null)

    const leadershipTeam = [
        {
            name: "Dr. Joanes Atela",
            position: "Executive Director",
            image: "/img/Prof-scaled.jpg",
            bio: "Dr. Joanes Atela is an accomplished executive with over 15 years of experience in research and providing technical support to African governments in natural resource management, climate change mitigation and adaptation, and knowledge management. Currently serving as the Founder and Executive Director of the Africa Research and Impact Network (ARIN), he excels in developing strong evidence-based actions and strategies that are adaptable and well linked to national, regional, and international climate change initiatives. Joanes previously served as the Director Partnerships and Impact and the Head of the Climate Resilient Economies Programme at the African Centre for Technology Studies(ACTS) to become one of the best in the world, ranking third globally and the best in Africa according to the 2016 ICCG rankings based on research and policy work.He has been extensively involved in academia and research, serving as an Associate at the Institute of Climate Change and Adaptation(ICCA), University of Nairobi, and as a Research Fellow at the World Agroforestry Centre(ICRAF) and the United Nations University. Joanes has published widely in international journals, books, media and blogs focusing on resilience, knowledge systems as well as international politics with over 1000 citations on Google Scholar.He has successfully led the design and implementation of numerous funded projects.He played a pivotal role in synthesizing key community- based adaptation initiatives across the world which provided significant evidence towards the establishment of the Locally Led Adaptation Agenda within the global climate action arena. Joanes is particularly passionate about making science work for the local vulnerable communities.He has particular interest in strengthening the Science - Policy Interface in Africa.He founded the Grassroot Impact Centre - an initiative operating and empowering local communities including girls, youth, women with knowledge on resilience and innovation and seeks to develop models in which research can better align and support the needs of local communities. At the strategic level, Joanes is a member of several high - level technical boards.He is the Lead Expert in the development of the African Union Green Innovation Framework, which guides member states in accelerating green growth actions; the Lead expert for developing the First Kenya's Innovation Outlook Framework and a member of the Strategic Advisory Group for the UK Research and Innovation Fund(UKRI).Joanes also served as a Scientific Advisory Panel Member of Stockholm at 50 + and Advisory Committee Member to the Resilience Evidence Forum alongside serving in several global Advisory Committee.He has won various awards including the Young Scientist Ward by the European Meteorological Society, the Exceptional Achievement Delegate in the Model United Nations Forum among others.Dr.Atela holds a Ph.D.in Environment and Development from the University of Leeds, United Kingdom, MSC in Natural Resource Management from Bonn University Germany(First Class) and BSc in Environmental Science, Maseno University - Kenya(First Class Honours).",
            email: "j.atela@arin-africa.org",
            linkedin: "#",
        },
        {
            name: "Akinyi J. Eurallyah, PhD ",
            position: "ARIN Fellowship Manager",
            image: "/img/Akinyi2.jpg",
            bio: "Eurallyah Akinyi holds the position of Fellowship Manager at ARIN. Akinyi is also an Advocate of the High Court of Kenya. Her expertise lies at the intersection of sovereign financing, climate change, sustainable development, global economic governance, international trade and investment, public-private partnerships, business and human rights, and public policy.Akinyi's educational background includes an LL.M.in International Trade and Investment Laws from the University of Pretoria, South Africa, a Post- graduate diploma in Laws from the Kenya School of Law, and an LL.B.from Moi University, Kenya.Currently, she is pursuing her Ph.D.in Law at Dalhousie University, Canada.Prior to her role at ARIN, Akinyi held various positions at esteemed organizations such as the United Nations Economic Commission for Africa(UNECA), NatureFinance(Sustainability - linked Sovereign Debt Hub), Africa Sovereign Debt Justice Network, Trade Law Centre, and the Office of the Special Envoy on International Trade & Investment of the AfCFTA at the Canada - Africa Chamber of Business.  Akinyi's expertise extends to coalition - building with the public, governments, and companies, as well as analyzing and contributing to various public policy processes related to global economic and environmental governance.She has conducted extensive research and published on topics including sustainable development, climate change, international trade and investments, law and governance of international financial architecture, sovereign debt, global tax, global politics and democracy, as well as business and human rights.",
        },
        {
            name: "Jerry Ariel Mandela ",
            position: "ARIN Fellowship Cordinator",
            image: "/img/focalpoints/jerry.webp",
            bio: "Jerry Ariel Mandela is a Research Assistant at the Africa Research and Impact Network (ARIN), specializing in climate change and development. He holds a Bachelor's degree in Development Studies from Mount Kenya University and brings an interdisciplinary perspective that connects social, economic, and environmental dimensions to sustainability challenges. At ARIN, Jerry contributes to projects on climate adaptation, finance, AI for resilience and just energy transitions.His expertise spans climate policy analysis, data- driven research and stakeholder mapping with a growing focus on climate governance, adaptation metrics and climate finance.Passionate about inclusive and just climate action, he is committed to amplifying the voices of local communities, youth, and marginalized groups in shaping climate solutions across Africa Jerry is committed to translating research into solutions that amplify the voices of local communities, youth and marginalized groups while advancing sustainable development across Africa.",
        },
    ]

    const supportTeam = [
        {
            name: "Dr. Antoine Faye (PhD)",
            position: "Central Africa and Francophone West Africa Focal Point",
            image: "/img/focalpoints/faye.jpg",
            bio: " Dr. Antoine Faye is the focal point for Francophone. He is an Independent Consultant with tested expertise in Public Policy Analysis while specializing in Climate Change Economics. At mid-career as a Budget and Fiscal Analyst within the US Diplomatic Mission in Dakar Senegal, Antoine decided in 2000, to undertake a career change when he relocated in the United States of America.To enhance his academic curriculum Antoine pursued a well sought interdisciplinary Degree named the CUNY/ BA at the graduate center of the City University of New York.With that valuable credential, Antoine has been admitted to the renowned School of Public and International Affairs –SPIA of Columbia University.in New York to obtain a Master in International Affairs –Economic Political Development / Management.Upon his return in Senegal in 2011, Antoine was an Advisor to the former Ministry of Energy Renewable to help that department to approach with much more rigor the opportunities available, both multilaterally and bilaterally and that the global concerns about tackling climate change has put in place through that a range of initiatives and funding mechanisms.  Since 2012, Antoine has used his professional skills to help organizations, institutions and governments to define and plan for implementation and execution of programs and projects.He was, successively, the expert in renewable energy financing of the project CEADIR(Climate Economic Analysis or Development, Investment & Resilience) of USAID, the Regional Coordinator for West Africa, of the Regional Initiative for Investments in Clean Energies(RCEII; and the Chief Resilience Officer - CRO of the city of Dakar in the context of the city's admission to the network of 100 Resilient Cities initiated by the Rockefeller Foundation.Also, as a member of the National Committee on Climate Change(COMNACC) Senegal; Antoine plays a big role in the advisory group experts that is helping the government of Senegal to reflect on all issues relating to climate change.",
        },
        {
            name: "Dr. Albert Arhin",
            position: "West Africa (Anglophone) Focal Point",
            image: "/img/focalpoints/arihni.webp",
            bio: "Dr. Albert Arhin is the Lead Researcher for the project Climate Adaptation Strategies and Initiatives: Issues and Pathways in Ghana. Dr. Arhinis is a sustainability expert with more than fifteen years of experience in research, technical support and strategic planning in climate change, REDD+ and land restoration policies, green economy and sustainable development. He previously worked as a Research and Policy Manager for Oxfam in Ghana. He has also worked on multi-disciplinary projects designed to generate evidence to inform policy, practice and academic discourse. He was also a Research Fellow with the Bureau of Integrated Rural Development (BIRD) of the Kwame Nkrumah University of Science and Technology (KNUST), Ghana, and a lecturer at the Department of Planning, KNUST, Ghana. He holds a PhD in Geography from the University of Cambridge, UK.",

        },




        {
            name: "Dr. Mary Nantongo",
            position: "Regional Focal Point - East Africa",
            image: "/img/focalpoints/mary.jpg",
            bio: "Dr. Mary Nantongo is a lecturer at the Department of Economics, Makerere University Business School. She is a postdoctoral fellow on the 'Capacity Building for Socially Just and Sustainable Energy Transitions' project, where her research focuses on asset and resource stranding as a consequence of the transition to a low carbon economy in Uganda. Mary is also a certified expert in Applied Development Finance by the European Investment Bank and Global Development Network as well as a certified expert in Financing Nationally Determined Contributions of the Paris Climate Agreement by the Frankfurt School of Finance and Management. She is also a member of the Network for Impact Evaluation Researchers in Africa. For this year, 2022, Mary is a member of the scientific committee for the organization of the annual conference on renewable energy organized by the Ministry of Energy and Mineral Development, Uganda. Mary holds a PhD in Development and Environment Studies (Institutional Economics) and an MSc. in Development and Natural Resource Economics from the Norwegian University of Life Sciences. Her research interests revolve around the analysis of social, economic and environmental impacts of climate change, as well as evaluations of policies, programs and investments in the fields of environment and climate and the interactions and interdependencies between these and the broad sectors of agriculture, energy and natural resources.",
        },
        {
            name: "Dr. Merham Keleg",
            position: "North Africa Focal Point",
            image: "/img/focalpoints/merham.webp",

        },
        {
            name: "Dr. Tamuka Chekero",
            position: "Regional Focal Point - South Africa",
            image: "/img/focalpoints/chekero-tamuka.jpg",
        }

    ]

    const Modal = ({ member, onClose }) => {
        if (!member) return null

        return (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
                    {/* Header */}
                    <div className="relative bg-gradient-to-br from-[#48a4bb] to-[#3a8a9a] p-8 text-white">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <div className="flex items-start gap-6">
                            <div className="relative w-32 h-40 rounded-xl overflow-hidden shadow-lg flex-shrink-0 bg-white/10">
                                <Image src={member.image} alt={member.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                <p className="text-white/90 font-medium mb-4">{member.position}</p>
                            </div>
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="p-8">
                        <h4 className="text-lg font-bold text-[#030f41] mb-4">Biography</h4>
                        <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                    </div>
                </div >
            </div >
        )
    }

    return (
        <>
            <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Main About Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-lg text-sm font-semibold">
                                MORE ABOUT US
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-[#030f41] leading-tight">
                                Building Africa&apos;s Research Excellence Network
                            </h1>

                            <div className="space-y-5 text-gray-700 leading-relaxed text-base">
                                <p>
                                    It is in this context that the ARIN Network launched the ARIN Fellowship program which brings
                                    together over 200 researchers from thirty-eight countries. The fellowship
                                    program consists of a network of talented researchers and technocrats across Africa who have been
                                    undertaking research in various fields including natural resource management, climate change,
                                    agriculture, forestry, energy, water, and cities to leverage their knowledge and experiences in
                                    promoting research excellence and impact pathways.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-[#48a4bb]" />
                                    <div>
                                        <p className="text-sm text-gray-600 font-medium">Need help?</p>
                                        <p className="text-[#030f41] font-semibold">+254 746 130873</p>
                                    </div>
                                </div>
                                <Link href="/about">
                                    <Button className="bg-[#48a4bb] hover:bg-[#3a8a9a] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                                        LEARN MORE ABOUT US
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Core Values Style */}
                        <div className="bg-white rounded-2xl shadow-lg p-10">
                            <h2 className="text-3xl font-bold text-[#030f41] mb-8">Our Impact Network</h2>

                            <div className="space-y-8">
                                {/* Researchers */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#48a4bb]/10 p-3 rounded-xl flex-shrink-0">
                                        <Users className="h-6 w-6 text-[#48a4bb]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#030f41] mb-2">300+ Researchers</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Talented researchers and technocrats across 41 countries working in
                                            natural resource management, climate change, agriculture, forestry, energy, water, and cities.
                                        </p>
                                    </div>
                                </div>

                                {/* Mission */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#48a4bb]/10 p-3 rounded-xl flex-shrink-0">
                                        <Target className="h-6 w-6 text-[#48a4bb]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#030f41] mb-2">Mission</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Identify and leverage evidence to flexibly and innovatively contribute to Africa&apos;s
                                            research transformation, policy analysis and capacity building.
                                        </p>
                                    </div>
                                </div>

                                {/* Vision */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#48a4bb]/10 p-3 rounded-xl flex-shrink-0">
                                        <Eye className="h-6 w-6 text-[#48a4bb]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#030f41] mb-2">Vision</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            A future where scientific advancements are seamlessly integrated into public policy to address
                                            Africa&apos;s pressing development challenges.
                                        </p>
                                    </div>
                                </div>

                                {/* Countries */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#48a4bb]/10 p-3 rounded-xl flex-shrink-0">
                                        <Globe className="h-6 w-6 text-[#48a4bb]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#030f41] mb-2">41 Countries</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Spanning across Africa, our network creates a platform for cross-border
                                            collaboration and knowledge exchange among researchers and policymakers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fellowship Roles Section */}
                    <div className="bg-gradient-to-br from-[#48a4bb]/5 to-[#030f41]/5 rounded-2xl shadow-lg p-12 mb-12">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-lg text-sm font-semibold mb-4">
                                YOUR ROLE AS AN ARIN FELLOW
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#030f41] mb-3">Fellowship Categories</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                ARIN has two categories of Fellows. Your role and responsibilities depend on the fellowship track to which you belong.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                            {/* ARIN Research Fellows */}
                            <Card className="bg-white border-2 border-[#48a4bb]/20 hover:border-[#48a4bb] hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
                                <div className="p-8">
                                    <div className="bg-[#48a4bb] text-white px-4 py-2 rounded-lg inline-block mb-4 font-bold">
                                        ARF
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#030f41] mb-4">ARIN Research Fellows</h3>

                                    <div className="mb-6">
                                        <h4 className="font-bold text-[#030f41] mb-3 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-[#48a4bb] rounded-full"></div>
                                            As a Research Fellow, you bring:
                                        </h4>
                                        <ul className="space-y-2 text-gray-700 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>Strong research credentials and a demonstrated publication record</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>Expertise in one or more of ARIN's thematic areas</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>A commitment to conducting rigorous, policy-relevant research</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-[#030f41] mb-3 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-[#48a4bb] rounded-full"></div>
                                            Your responsibilities include:
                                        </h4>
                                        <ul className="space-y-2 text-gray-700 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>Leading or contributing to empirical research projects</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>Producing knowledge products, including journal articles, book chapters, and policy briefs</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>Presenting research at Friday Reviews and academic or policy conferences</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>Mentoring early-career researchers, where appropriate</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>

                            {/* ARIN Policy Fellows */}
                            <Card className="bg-white border-2 border-[#030f41]/20 hover:border-[#030f41] hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
                                <div className="p-8">
                                    <div className="bg-[#030f41] text-white px-4 py-2 rounded-lg inline-block mb-4 font-bold">
                                        APF
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#030f41] mb-4">ARIN Policy Fellows</h3>

                                    <div className="mb-6">
                                        <h4 className="font-bold text-[#030f41] mb-3 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-[#030f41] rounded-full"></div>
                                            As a Policy Fellow, you bring:
                                        </h4>
                                        <ul className="space-y-2 text-gray-700 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#030f41] mt-1">•</span>
                                                <span>Experience in government, international organisations, or policy institutions</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#030f41] mt-1">•</span>
                                                <span>A strong understanding of policy processes and decision-making contexts</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#030f41] mt-1">•</span>
                                                <span>The ability to translate research evidence into actionable policy recommendations</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-[#030f41] mb-3 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-[#030f41] rounded-full"></div>
                                            Your responsibilities include:
                                        </h4>
                                        <ul className="space-y-2 text-gray-700 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#030f41] mt-1">•</span>
                                                <span>Providing policy perspectives during research discussions</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#030f41] mt-1">•</span>
                                                <span>Leading or contributing to policy dialogues and stakeholder engagements</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#030f41] mt-1">•</span>
                                                <span>Bridging research findings with policy formulation and implementation</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#030f41] mt-1">•</span>
                                                <span>Contributing to evidence-informed policymaking initiatives</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* What is Expected */}
                        <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
                            <h3 className="text-2xl font-bold text-[#030f41] mb-6">What is Expected of You</h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-[#48a4bb] mb-4 text-lg">Time Commitment</h4>
                                    <p className="text-gray-700 mb-4">
                                        Fellows are expected to commit approximately <strong>10–15 hours per month</strong> to Fellowship activities.
                                    </p>
                                    <div className="mb-4">
                                        <h5 className="font-semibold text-[#030f41] mb-2">Core Fellowship Activities:</h5>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>Attend Friday Review sessions (2 hours weekly when you are participating or when topics align with your interests)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>Participate in monthly capacity-building workshops (4 hours/month)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>Engage with the fellow community through regional and continental dialogues</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#48a4bb] mt-1">•</span>
                                                <span>Contribute to at least one knowledge product annually</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#48a4bb] mb-4 text-lg">Opportunities You Can Pursue:</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Apply for mini-grants to fund your research</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Lead a Friday Review session (at least once during your fellowship)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Participate in ARIN projects as a consultant</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Attend sponsored conferences and training programs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Contribute to ARIN's annual State of Evidence reports</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Collaborate with other fellows on joint projects</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 p-4 bg-[#48a4bb]/10 rounded-lg">
                                        <p className="text-[#030f41] font-semibold">
                                            Fellowship Duration: Two years, with recruitment cycles every two years
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What You Gain */}
                        <div className="bg-white rounded-2xl p-8 shadow-md">
                            <h3 className="text-2xl font-bold text-[#030f41] mb-6">What You Gain</h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Financial Support */}
                                <div className="bg-gradient-to-br from-[#48a4bb]/10 to-[#48a4bb]/5 rounded-xl p-6">
                                    <div className="bg-[#48a4bb] text-white p-3 rounded-lg inline-block mb-4">
                                        <DollarSign className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-[#030f41] mb-3">Financial Support</h4>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Mini-grant opportunities (for research projects)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Conference sponsorship for international meetings</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Consultancy opportunities on ARIN projects</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Competitive compensation for project-based work</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Professional Development */}
                                <div className="bg-gradient-to-br from-[#030f41]/10 to-[#030f41]/5 rounded-xl p-6">
                                    <div className="bg-[#030f41] text-white p-3 rounded-lg inline-block mb-4">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-[#030f41] mb-3">Professional Development</h4>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#030f41] mt-1">•</span>
                                            <span>Monthly publication workshops with Taylor & Francis Group</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#030f41] mt-1">•</span>
                                            <span>Specialised training programs (AI, Just Transition, etc.)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#030f41] mt-1">•</span>
                                            <span>Mentorship from senior researchers and policy leaders</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#030f41] mt-1">•</span>
                                            <span>Guaranteed publication pathways</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Networking and Visibility */}
                                <div className="bg-gradient-to-br from-[#48a4bb]/10 to-[#48a4bb]/5 rounded-xl p-6">
                                    <div className="bg-[#48a4bb] text-white p-3 rounded-lg inline-block mb-4">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-[#030f41] mb-3">Networking & Visibility</h4>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Access to over 200 fellows across 36 countries</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Platform to showcase your work at Friday Reviews and other policy convenings</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Connections with donors, policymakers, and research institutions</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#48a4bb] mt-1">•</span>
                                            <span>Nomination opportunities for high-level advisory boards</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Career Advancement */}
                                <div className="bg-gradient-to-br from-[#030f41]/10 to-[#030f41]/5 rounded-xl p-6">
                                    <div className="bg-[#030f41] text-white p-3 rounded-lg inline-block mb-4">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-[#030f41] mb-3">Career Advancement</h4>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#030f41] mt-1">•</span>
                                            <span>Enhanced research and publication portfolio</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#030f41] mt-1">•</span>
                                            <span>Policy engagement experience</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#030f41] mt-1">•</span>
                                            <span>International exposure and collaboration</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#030f41] mt-1">•</span>
                                            <span>Professional recognition and credibility</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-12 mb-12">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-lg text-sm font-semibold mb-4">
                                LEADERSHIP
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#030f41] mb-3">Fellowship Leadership</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Our executive team leading research excellence and policy impact across Africa
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {leadershipTeam.map((member, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
                                >
                                    <div className="p-8">
                                        <div className="relative w-32 h-40 mx-auto mb-6 rounded-xl overflow-hidden bg-gray-200">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="text-center mb-4">
                                            <h4 className="font-bold text-[#030f41] text-lg mb-1">{member.name}</h4>
                                            <p className="text-[#48a4bb] font-medium text-sm">{member.position}</p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedMember(member)}
                                            className="w-full bg-[#48a4bb] hover:bg-[#3a8a9a] text-white py-2.5 rounded-lg font-medium transition-all duration-300 text-sm"
                                        >
                                            View Bio
                                        </button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Support Team Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-12">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-lg text-sm font-semibold mb-4">
                                Our Focal Points
                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {supportTeam.map((member, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
                                >
                                    <div className="p-6">
                                        <div className="relative w-28 h-36 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-200">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="text-center mb-4">
                                            <h4 className="font-bold text-[#030f41] text-base mb-1">{member.name}</h4>
                                            <p className="text-[#48a4bb] font-medium text-sm">{member.position}</p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedMember(member)}
                                            className="w-full bg-[#48a4bb] hover:bg-[#3a8a9a] text-white py-2.5 rounded-lg font-medium transition-all duration-300 text-sm"
                                        >
                                            View Bio
                                        </button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedMember && <Modal member={selectedMember} onClose={() => setSelectedMember(null)} />}
        </>
    )
}

export default ARINFellowshipAbout