import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

const Explorer = Component.Explorer({
  sortFn: (a, b) => {
    if (!a.file && b.file) return -1
    if (a.file && !b.file) return 1
    if (a.file && b.file) {
      const d1 = a.file.dates?.created?.getTime() ?? 0
      const d2 = b.file.dates?.created?.getTime() ?? 0
      return d2 - d1
    }
    return a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
  },
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    // Hidden on mobile — avoids duplicating the page title in the mobile nav bar
    Component.DesktopOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Explorer),
  ],
  right: [
    // RecentNotes and Backlinks show on all screen sizes — they are content.
    // Graph and ToC are desktop-only (don't translate well to small screens).
    Component.RecentNotes({ limit: 10, linkToMore: "tags" as SimpleSlug }),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Explorer),
  ],
  right: [],
}
