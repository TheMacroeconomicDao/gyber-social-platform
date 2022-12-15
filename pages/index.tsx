import LandingContent from "../src/components/content/LandingContent/LandingContent";
import LandingLayout from "../src/components/layouts/LandingLayout/LandingLayout";

export default function Home() {
	return (
		<div>
			<LandingLayout>
				<LandingContent />
			</LandingLayout>
		</div>
	);
}
