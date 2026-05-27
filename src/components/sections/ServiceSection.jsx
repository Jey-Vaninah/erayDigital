import Badge from "../ui/Badge";
import ServiceCard from "../ui/ServiceCard";
import { FaCode, FaPalette, FaBullhorn } from "react-icons/fa";

function ServicesSection() {
    return (
        <section className="py-20 px-6 md:px-20 bg-gray-100">

            <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">

                <div>
                    <Badge text="Our Services" />

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                        Services de haute qualité
                    </h2>
                </div>

                <div className="md:max-w-xl">
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Nous proposons des solutions digitales modernes adaptées aux besoins des entreprises afin d’améliorer leur visibilité, leur performance et leur croissance.
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <ServiceCard
                    image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    icon={FaCode}
                    title="Développement Web & Logiciel"
                    description="Sites vitrines, e-commerce, applications web et logiciels métier sur mesure.
                     Nous construisons des solutions robustes, rapides et évolutives adaptées à vos besoins."
                />


                <ServiceCard
                    image="https://images.unsplash.com/photo-1551434678-e076c223a692"
                    icon={FaPalette}
                    title="Branding & Design"
                    description="Identité de marque, logo, charte graphique et UI/UX design. 
                    Nous créons des univers visuels cohérents qui reflètent l’ADN de votre entreprise et marquent les esprits."
                />

                <ServiceCard
                    image="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                    icon={FaBullhorn}
                    title="Marketing Digital"
                    description="Stratégies digitales, publicité en ligne, réseaux sociaux et acquisition client. 
                    Nous aidons votre entreprise à gagner en visibilité et à attirer plus de clients."
                />

            </div>

        </section>
    );
}

export default ServicesSection;